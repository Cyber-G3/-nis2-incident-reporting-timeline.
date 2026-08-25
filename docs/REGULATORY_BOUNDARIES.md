# Regulatory Boundaries

## NIS2 incident reporting

The core timeline models Directive (EU) 2022/2555 Article 23 as decision support:

- early warning: without undue delay and within 24 hours of awareness of a significant incident;
- incident notification: without undue delay and within 72 hours of awareness;
- trust service provider exception: incident notification within 24 hours for significant incidents affecting trust services;
- intermediate report: when requested by the CSIRT or competent authority;
- final report: no later than one calendar month after submission of the incident notification;
- ongoing incident: progress report at the final-report milestone, followed by a final report within one month after handling the incident.

National transposition, competent authority, portal, sector-specific rules and local definitions must still be validated.

## GDPR must remain separate

NIS2 and GDPR incident/breach workflows can overlap factually but are distinct legal assessments. Do not infer GDPR notification solely from a NIS2 significance decision and do not infer NIS2 significance solely from a GDPR personal-data breach assessment.

A downstream orchestration layer may link the two records using the same incident reference, but should preserve separate:

- legal basis;
- applicability decision;
- trigger/awareness timestamp;
- competent authority;
- notification deadline;
- decision owner;
- submitted-at timestamp;
- evidence and rationale.

## Evidence / audit traceability

Exported incident records should preserve the recorded awareness time, significance decision, reason codes/rationale, timeline calculations, submission timestamps, authority route, owner/approver, decision log and source/version metadata.
