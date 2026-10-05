import test from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, assessIncident } from "../core.js";

test("escapeHtml correctly escapes dangerous HTML characters", () => {
  const payload = `<script>alert("xss")</script> & 'hello'`;
  const sanitized = escapeHtml(payload);
  assert.equal(sanitized, "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#39;hello&#39;");
});

test("escapeHtml handles null, undefined, and non-string inputs", () => {
  assert.equal(escapeHtml(null), "");
  assert.equal(escapeHtml(undefined), "");
  assert.equal(escapeHtml(123), "123");
});

test("assessIncident handles workflowStatus with special characters safely", () => {
  const input = {
    awarenessAt: "2026-08-16T00:00:00Z",
    fields: {
      earlyStatus: "<img src=x onerror=alert(1)>"
    }
  };
  const result = assessIncident(input, new Date("2026-08-16T01:00:00Z"));
  assert.equal(result.timelines[0].workflowStatus, "<img src=x onerror=alert(1)>");
  assert.equal(escapeHtml(result.timelines[0].workflowStatus), "&lt;img src=x onerror=alert(1)&gt;");
});
