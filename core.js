export const DEADLINES = [
  { id: "early", hours: 24, label: "Early warning", article: "Art. 23(4)(a)", required: ["detectedAt", "incidentSummary", "suspectedCause", "crossBorder", "contactOwner"] },
  { id: "notification", hours: 72, label: "Incident notification", article: "Art. 23(4)(b)", required: ["detectedAt", "incidentSummary", "severity", "impact", "indicators", "mitigation", "crossBorder", "contactOwner"] },
  { id: "final", label: "Final report", article: "Art. 23(4)(d)", required: ["detectedAt", "incidentSummary", "severity", "impact", "rootCause", "mitigation", "crossBorder", "lessons", "contactOwner"] }
];

export const AUTHORITIES={EU:{name:"National competent authority / CSIRT",url:"https://www.enisa.europa.eu/topics/incident-response/csirt-inventory",note:"Select and validate the authority and channel applicable to the entity, sector and Member State."},ES:{name:"INCIBE-CERT — Spain",url:"https://www.incibe.es/incibe-cert/incidentes/respuesta-incidentes",note:"Reference route for private-law entities. Validate the competent NIS2 authority and sector-specific route."},DE:{name:"BSI / CERT-Bund — Germany",url:"https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Reaktion/CERT-Bund/Meldungen-Vorfaelle/meldungen-vorfaelle_node.html",note:"Official BSI reporting information. Validate the statutory portal and entity category."},FR:{name:"CERT-FR / ANSSI — France",url:"https://cert.ssi.gouv.fr/contact/",note:"Official cyber-incident declaration reference. Validate sector and legal reporting requirements."}};
const ES={"Early warning":"Alerta temprana","Incident notification":"Notificación del incidente","Final report":"Informe final","unknown":"sin calcular","overdue":"vencido","urgent":"urgente","open":"abierto","draft":"borrador","review":"en revisión","approved":"aprobado","submitted":"enviado"};
export const tr=value=>ES[value]||value;

export function addHours(iso, hours) {
  if (!iso) return null;
  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) return null;
  value.setTime(value.getTime() + hours * 3600000);
  return value;
}

export function addCalendarMonth(isoOrDate) {
  if (!isoOrDate) return null;
  const value = isoOrDate instanceof Date ? new Date(isoOrDate) : new Date(isoOrDate);
  if (Number.isNaN(value.getTime())) return null;
  const targetMonth = value.getUTCMonth() + 1;
  const originalDay = value.getUTCDate();
  value.setUTCDate(1);
  value.setUTCMonth(targetMonth);
  const lastDay = new Date(Date.UTC(value.getUTCFullYear(), value.getUTCMonth() + 1, 0)).getUTCDate();
  value.setUTCDate(Math.min(originalDay, lastDay));
  return value;
}

function deadlineFor(item, input, fields) {
  if (item.id === "early") return addHours(input.awarenessAt, 24);
  if (item.id === "notification") return addHours(input.awarenessAt, input.trustServiceProvider === true ? 24 : 72);
  if (item.id === "final") {
    const notificationSubmittedAt = fields.notificationSubmittedAt || null;
    const notificationReference = notificationSubmittedAt || addHours(input.awarenessAt, input.trustServiceProvider === true ? 24 : 72);
    return addCalendarMonth(notificationReference);
  }
  return null;
}

export function assessIncident(input = {}, now = new Date()) {
  const safeInput = input && typeof input === "object" ? input : {};
  const fields = safeInput.fields || {};
  const significant = safeInput.significant === "yes";
  const uncertainty = safeInput.significant !== "yes" && safeInput.significant !== "no";
  const timelines = DEADLINES.map(item => {
    const due = deadlineFor(item, safeInput, fields);
    const missing = item.required.filter(key => !String(fields[key] ?? "").trim());
    const remainingMs = due ? due.getTime() - now.getTime() : null;
    return {
      ...item,
      hours: item.id === "notification" ? (safeInput.trustServiceProvider === true ? 24 : 72) : item.hours,
      due: due?.toISOString() || null,
      missing,
      completion: Math.round(((item.required.length - missing.length) / item.required.length) * 100),
      status: !due ? "unknown" : remainingMs < 0 ? "overdue" : remainingMs <= 6 * 3600000 ? "urgent" : "open",
      remainingMs,
      workflowStatus: fields[item.id+"Status"]||"draft",
      submittedAt: fields[item.id+"SubmittedAt"]||null
    };
  });
  const completeness = Math.round(timelines.reduce((sum, x) => sum + x.completion, 0) / timelines.length);
  const risks = [];
  if (!safeInput.awarenessAt) risks.push("Awareness time is not recorded; statutory deadlines cannot be calculated.");
  if (uncertainty) risks.push("Significance is undecided; document the assessment and escalation decision.");
  if (!fields.contactOwner) risks.push("No accountable reporting owner has been assigned.");
  if (!fields.crossBorder) risks.push("Cross-border impact has not been assessed.");
  if (safeInput.trustServiceProvider === true) risks.push("Trust service provider route selected: the Article 23(4) incident-notification deadline is 24 hours; validate the applicable national implementation.");
  if (fields.incidentOngoing === "yes") risks.push("Incident remains ongoing: Article 23(4)(e) requires a progress report at the final-report milestone and a final report within one month of handling the incident.");
  if (timelines.some(x => x.status === "overdue")) risks.push("One or more indicative reporting deadlines have passed.");
  const authorityKey = String(safeInput.country || "");
  const authority = Object.hasOwn(AUTHORITIES, authorityKey) ? AUTHORITIES[authorityKey] : AUTHORITIES.EU;
  return { significant, uncertainty, completeness, timelines, risks, authority, generatedAt: now.toISOString() };
}

export function buildMarkdown(input = {}, result = {}) {
  const safeInput = input && typeof input === "object" ? input : {};
  if(safeInput.lang==="es") return buildSpanishMarkdown(safeInput,result);
  const lines = [
    "# NIS2 Incident Reporting Readiness Record",
    "",
    `Generated: ${result.generatedAt || ""}`,
    `Organisation: ${safeInput.organisation || "Not provided"}`,
    `Incident reference: ${safeInput.reference || "Not provided"}`,
    `Potentially significant: ${result.significant ? "Yes" : result.uncertainty ? "Undecided" : "No"}`,
    `Overall evidence completeness: ${result.completeness ?? 0}%`,
    "",
    "## Notification timeline"
  ];
  for (const item of result.timelines || []) {
    lines.push(`### ${item.label} — ${item.article}`, `- Due: ${item.due || "Cannot calculate"}`, `- Status: ${item.status}`, `- Completeness: ${item.completion}%`, `- Missing: ${item.missing.join(", ") || "None"}`, "");
  }
  const authority = result.authority || AUTHORITIES.EU;
  lines.push("## Authority route","- "+authority.name,"- "+authority.url,"- "+authority.note,"","## Decision log",safeInput.fields?.decisionLog||"No decision log recorded.","","## Readiness risks", ...(result.risks?.length ? result.risks.map(x => `- ${x}`) : ["- No critical readiness risks identified by this screening."]), "", "_Decision-support tool only. Validate national transposition, competent-authority requirements and legal advice._");
  return lines.join("\n");
}

function buildSpanishMarkdown(input,result){const authority=result.authority||AUTHORITIES.EU;const l=["# Registro de preparación para notificación NIS2","","Organización: "+(input.organisation||"No indicada"),"Referencia: "+(input.reference||"No indicada"),"Completitud: "+(result.completeness??0)+"%","","## Cronología"];(result.timelines||[]).forEach(x=>l.push("### "+tr(x.label)+" — "+x.article,"- Vencimiento: "+(x.due||"No calculable"),"- Estado: "+tr(x.status),"- Flujo: "+tr(x.workflowStatus),"- Completitud: "+x.completion+"%",""));l.push("## Ruta oficial","- "+authority.name,"- "+authority.url,"- "+authority.note,"","## Registro de decisiones",input.fields?.decisionLog||"No registrado.","","_Herramienta de apoyo. Valide transposición nacional, autoridad competente y asesoramiento legal._");return l.join("\n")}
