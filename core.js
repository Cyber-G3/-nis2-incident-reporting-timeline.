export const DEADLINES = [
  { id: "early", hours: 24, label: "Early warning", article: "Art. 23(4)(a)", required: ["detectedAt", "incidentSummary", "suspectedCause", "crossBorder", "contactOwner"] },
  { id: "notification", hours: 72, label: "Incident notification", article: "Art. 23(4)(b)", required: ["detectedAt", "incidentSummary", "severity", "impact", "indicators", "mitigation", "crossBorder", "contactOwner"] },
  { id: "final", hours: 720, label: "Final report", article: "Art. 23(4)(d)", required: ["detectedAt", "incidentSummary", "severity", "impact", "rootCause", "mitigation", "crossBorder", "lessons", "contactOwner"] }
];

export function addHours(iso, hours) {
  if (!iso) return null;
  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) return null;
  value.setHours(value.getHours() + hours);
  return value;
}

export function assessIncident(input, now = new Date()) {
  const fields = input.fields || {};
  const significant = input.significant === "yes";
  const uncertainty = input.significant !== "yes" && input.significant !== "no";
  const timelines = DEADLINES.map(item => {
    const due = addHours(input.awarenessAt, item.hours);
    const missing = item.required.filter(key => !String(fields[key] ?? "").trim());
    const remainingMs = due ? due.getTime() - now.getTime() : null;
    return {
      ...item,
      due: due?.toISOString() || null,
      missing,
      completion: Math.round(((item.required.length - missing.length) / item.required.length) * 100),
      status: !due ? "unknown" : remainingMs < 0 ? "overdue" : remainingMs <= 6 * 3600000 ? "urgent" : "open"
    };
  });
  const completeness = Math.round(timelines.reduce((sum, x) => sum + x.completion, 0) / timelines.length);
  const risks = [];
  if (!input.awarenessAt) risks.push("Awareness time is not recorded; statutory deadlines cannot be calculated.");
  if (uncertainty) risks.push("Significance is undecided; document the assessment and escalation decision.");
  if (!fields.contactOwner) risks.push("No accountable reporting owner has been assigned.");
  if (!fields.crossBorder) risks.push("Cross-border impact has not been assessed.");
  if (timelines.some(x => x.status === "overdue")) risks.push("One or more indicative reporting deadlines have passed.");
  return { significant, uncertainty, completeness, timelines, risks, generatedAt: now.toISOString() };
}

export function buildMarkdown(input, result) {
  const lines = [
    "# NIS2 Incident Reporting Readiness Record",
    "",
    `Generated: ${result.generatedAt}`,
    `Organisation: ${input.organisation || "Not provided"}`,
    `Incident reference: ${input.reference || "Not provided"}`,
    `Potentially significant: ${result.significant ? "Yes" : result.uncertainty ? "Undecided" : "No"}`,
    `Overall evidence completeness: ${result.completeness}%`,
    "",
    "## Notification timeline"
  ];
  for (const item of result.timelines) {
    lines.push(`### ${item.label} — ${item.article}`, `- Due: ${item.due || "Cannot calculate"}`, `- Status: ${item.status}`, `- Completeness: ${item.completion}%`, `- Missing: ${item.missing.join(", ") || "None"}`, "");
  }
  lines.push("## Readiness risks", ...(result.risks.length ? result.risks.map(x => `- ${x}`) : ["- No critical readiness risks identified by this screening."]), "", "_Decision-support tool only. Validate national transposition, competent-authority requirements and legal advice._");
  return lines.join("\n");
}
