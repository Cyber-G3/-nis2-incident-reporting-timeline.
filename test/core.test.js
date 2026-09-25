import test from "node:test";
import assert from "node:assert/strict";
import { assessIncident, addHours, addCalendarMonth, buildMarkdown, escapeHtml } from "../core.js";

test("calculates the 24-hour deadline from awareness",()=>{assert.equal(addHours("2026-08-16T10:00:00Z",24).toISOString(),"2026-08-17T10:00:00.000Z")});
test("calculates a calendar month rather than fixed 720 hours",()=>{assert.equal(addCalendarMonth("2026-01-31T10:00:00Z").toISOString(),"2026-02-28T10:00:00.000Z")});
test("final report is one calendar month after submitted incident notification",()=>{const r=assessIncident({awarenessAt:"2026-08-01T00:00:00Z",significant:"yes",fields:{notificationSubmittedAt:"2026-08-03T12:00:00Z"}},new Date("2026-08-04T00:00:00Z"));assert.equal(r.timelines[2].due,"2026-09-03T12:00:00.000Z")});
test("trust service provider incident notification uses 24 hours",()=>{const r=assessIncident({awarenessAt:"2026-08-01T00:00:00Z",trustServiceProvider:true,fields:{}},new Date("2026-08-01T01:00:00Z"));assert.equal(r.timelines[1].due,"2026-08-02T00:00:00.000Z")});
test("ongoing incident surfaces progress-report requirement",()=>{const r=assessIncident({awarenessAt:"2026-08-01T00:00:00Z",fields:{incidentOngoing:"yes"}},new Date("2026-08-01T01:00:00Z"));assert.ok(r.risks.some(x=>x.includes("progress report")))});
test("flags an overdue deadline",()=>{const r=assessIncident({awarenessAt:"2026-08-15T00:00:00Z",significant:"yes",fields:{}},new Date("2026-08-16T12:00:00Z"));assert.equal(r.timelines[0].status,"overdue")});
test("does not present uncertainty as non-significant",()=>{const r=assessIncident({awarenessAt:null,significant:"unknown",fields:{}},new Date());assert.equal(r.uncertainty,true);assert.equal(r.significant,false)});
test("scores a complete final evidence set at 100 percent",()=>{const fields={detectedAt:"x",incidentSummary:"x",suspectedCause:"x",severity:"x",impact:"x",indicators:"x",mitigation:"x",crossBorder:"x",rootCause:"x",lessons:"x",contactOwner:"x"};const r=assessIncident({awarenessAt:"2026-08-16T00:00:00Z",significant:"yes",fields},new Date("2026-08-16T01:00:00Z"));assert.equal(r.completeness,100)});
test("markdown output contains traceable milestones",()=>{const input={organisation:"DemoCo",reference:"INC-1",awarenessAt:null,significant:"unknown",fields:{}};const r=assessIncident(input,new Date("2026-08-16T00:00:00Z"));assert.match(buildMarkdown(input,r),/Art\. 23\(4\)\(a\)/)});
test("country selection returns the official reference route",()=>{const r=assessIncident({country:"ES",fields:{}},new Date());assert.match(r.authority.name,/INCIBE-CERT/)});
test("workflow status remains separate from deadline status",()=>{const r=assessIncident({awarenessAt:"2026-08-16T00:00:00Z",fields:{earlyStatus:"approved"}},new Date("2026-08-16T01:00:00Z"));assert.equal(r.timelines[0].workflowStatus,"approved");assert.equal(r.timelines[0].status,"open")});
test("Spanish export contains localized timeline",()=>{const input={lang:"es",country:"ES",fields:{}};const r=assessIncident(input,new Date());assert.match(buildMarkdown(input,r),/Cronología/)});
test("escapeHtml escapes HTML special characters",()=>{assert.equal(escapeHtml('<script>alert("xss")</script>'),"&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;")});
