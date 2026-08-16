import { assessIncident, buildMarkdown } from "./core.js";

const form = document.querySelector("#assessment");
const results = document.querySelector("#results");
let latest = null;

const fieldNames = {detectedAt:"detection time",incidentSummary:"incident summary",suspectedCause:"suspected cause",severity:"severity and duration",impact:"business/societal impact",indicators:"indicators of compromise",mitigation:"mitigation measures",crossBorder:"cross-border assessment",rootCause:"root cause",lessons:"lessons learned",contactOwner:"reporting owner"};

function readInput(){
  const data=Object.fromEntries(new FormData(form));
  const {organisation,reference,awarenessAt,significant,...fields}=data;
  return {organisation,reference,awarenessAt,significant,fields};
}

function formatDate(iso){return iso?new Intl.DateTimeFormat(undefined,{dateStyle:"medium",timeStyle:"short"}).format(new Date(iso)):"Cannot calculate"}

function render(input,result){
  document.querySelector("#score").textContent=`${result.completeness}%`;
  document.querySelector("#meter").style.width=`${result.completeness}%`;
  const urgent=result.timelines.some(x=>["urgent","overdue"].includes(x.status));
  document.querySelector("#posture").textContent=urgent?"Immediate escalation":result.uncertainty?"Triage required":result.significant?"Reporting workflow active":"Record rationale";
  document.querySelector("#postureText").textContent=result.significant?"Treat the timeline as active and validate the national reporting route.":"Document the significance decision and retain supporting evidence.";
  document.querySelector("#timeline").innerHTML=result.timelines.map(x=>`<article class="milestone ${x.status}"><span class="status">${x.status}</span><h3>${x.hours===720?"1 month":`${x.hours} hours`} · ${x.label}</h3><p>${x.article}</p><time>${formatDate(x.due)}</time><p><strong>${x.completion}% complete</strong></p><ul>${x.missing.length?x.missing.map(k=>`<li>${fieldNames[k]||k}</li>`).join(""):"<li>No required fields missing</li>"}</ul></article>`).join("");
  document.querySelector("#risks").innerHTML=(result.risks.length?result.risks:["No critical readiness risks identified by this screening."]).map(x=>`<li>${x}</li>`).join("");
  results.classList.remove("hidden");
  latest={input,result};
  results.scrollIntoView({behavior:"smooth",block:"start"});
}

form.addEventListener("submit",event=>{event.preventDefault();const input=readInput();render(input,assessIncident(input));localStorage.setItem("nis2-reporting-draft",JSON.stringify(input));});
form.addEventListener("reset",()=>{localStorage.removeItem("nis2-reporting-draft");results.classList.add("hidden")});

document.querySelector("#demoBtn").addEventListener("click",()=>{
  const awareness=new Date(Date.now()-4*3600000); const detection=new Date(Date.now()-5*3600000);
  const demo={organisation:"DemoCo EU (fictional)",reference:"INC-DEMO-2026-014",awarenessAt:awareness.toISOString().slice(0,16),detectedAt:detection.toISOString().slice(0,16),significant:"yes",incidentSummary:"Customer-facing identity service unavailable following suspicious administrative activity.",suspectedCause:"Potential credential compromise; investigation active.",severity:"High severity; authentication unavailable for 95 minutes.",impact:"Approximately 2,400 EU users temporarily unable to access the service.",indicators:"Unusual privileged sign-in and configuration changes.",mitigation:"Sessions revoked, credentials rotated, access restricted and forensic preservation initiated.",crossBorder:"Potential cross-border impact",contactOwner:"Incident Response Lead",rootCause:"Investigation active; credential compromise is the leading hypothesis.",lessons:"Pending final review."};
  for(const [name,value] of Object.entries(demo)){const el=form.elements[name];if(!el)continue;if(el instanceof RadioNodeList){el.value=value}else el.value=value}
  form.requestSubmit();
});

function download(name,content,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();URL.revokeObjectURL(a.href)}
document.querySelector("#jsonBtn").addEventListener("click",()=>latest&&download("nis2-readiness-record.json",JSON.stringify(latest,null,2),"application/json"));
document.querySelector("#mdBtn").addEventListener("click",()=>latest&&download("nis2-readiness-record.md",buildMarkdown(latest.input,latest.result),"text/markdown"));
document.querySelector("#printBtn").addEventListener("click",()=>window.print());
document.querySelector("#langBtn").addEventListener("click",()=>alert("Spanish deep translation is scheduled for v1.1. The assessment logic and exported record are currently maintained in English for consistency."));

try{const saved=JSON.parse(localStorage.getItem("nis2-reporting-draft"));if(saved){for(const [name,value] of Object.entries({...saved,...saved.fields})){const el=form.elements[name];if(el)el.value=value}}}catch{}
