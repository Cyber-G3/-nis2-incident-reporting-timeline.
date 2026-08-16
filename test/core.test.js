import test from "node:test";
import assert from "node:assert/strict";
import { assessIncident, addHours, buildMarkdown } from "../core.js";

test("calculates the 24-hour deadline from awareness",()=>{assert.equal(addHours("2026-08-16T10:00:00Z",24).toISOString(),"2026-08-17T10:00:00.000Z")});
test("flags an overdue deadline",()=>{const r=assessIncident({awarenessAt:"2026-08-15T00:00:00Z",significant:"yes",fields:{}},new Date("2026-08-16T12:00:00Z"));assert.equal(r.timelines[0].status,"overdue")});
test("does not present uncertainty as non-significant",()=>{const r=assessIncident({awarenessAt:null,significant:"unknown",fields:{}},new Date());assert.equal(r.uncertainty,true);assert.equal(r.significant,false)});
test("scores a complete final evidence set at 100 percent",()=>{const fields={detectedAt:"x",incidentSummary:"x",suspectedCause:"x",severity:"x",impact:"x",indicators:"x",mitigation:"x",crossBorder:"x",rootCause:"x",lessons:"x",contactOwner:"x"};const r=assessIncident({awarenessAt:"2026-08-16T00:00:00Z",significant:"yes",fields},new Date("2026-08-16T01:00:00Z"));assert.equal(r.completeness,100)});
test("markdown output contains traceable milestones",()=>{const input={organisation:"DemoCo",reference:"INC-1",awarenessAt:null,significant:"unknown",fields:{}};const r=assessIncident(input,new Date("2026-08-16T00:00:00Z"));assert.match(buildMarkdown(input,r),/Art\. 23\(4\)\(a\)/)});
test("country selection returns the official reference route",()=>{const r=assessIncident({country:"ES",fields:{}},new Date());assert.match(r.authority.name,/INCIBE-CERT/)});
test("workflow status remains separate from deadline status",()=>{const r=assessIncident({awarenessAt:"2026-08-16T00:00:00Z",fields:{earlyStatus:"approved"}},new Date("2026-08-16T01:00:00Z"));assert.equal(r.timelines[0].workflowStatus,"approved");assert.equal(r.timelines[0].status,"open")});
test("Spanish export contains localized timeline",()=>{const input={lang:"es",country:"ES",fields:{}};const r=assessIncident(input,new Date());assert.match(buildMarkdown(input,r),/Cronología/)});
