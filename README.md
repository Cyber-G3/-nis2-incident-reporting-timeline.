# NIS2 Incident Reporting Timeline

## Open the live tool

**[Launch the NIS2 Incident Reporting Timeline →](https://cyber-g3.github.io/-nis2-incident-reporting-timeline./)**

Live URL: https://cyber-g3.github.io/-nis2-incident-reporting-timeline./

A professional, privacy-first decision-support tool for building an evidence-ready NIS2 incident notification record.

Version 1.1 adds bilingual EN/ES operation, live deadline countdowns, official country-reference routes, approval/submission states and a decision log.

## What it does

- Calculates indicative **24-hour early warning**, **72-hour incident notification** and **one-month final report** milestones from the recorded awareness time.
- Performs a milestone-specific evidence completeness assessment.
- Surfaces uncertainty, missing ownership, cross-border assessment gaps and deadline exposure.
- Produces an executive readiness dashboard and a 7/30/90-day improvement path.
- Exports the assessment as JSON, Markdown or print-ready PDF.
- Includes a clearly identified fictional DemoCo scenario.
- Processes and stores draft data locally in the browser.

## Professional boundary

This free tool supports initial triage and evidence preparation. It does not determine legal applicability, replace national reporting portals, submit notifications, or provide legal advice. NIS2 is implemented through national law; always validate the applicable national transposition and competent-authority requirements.

## Run locally

Serve the repository with any static HTTP server, for example:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Quality checks

```bash
npm test
npm run check
```

## Privacy and security

No backend, analytics or external form submission is included. Avoid entering sensitive incident data on shared devices. Review exported records before sharing.

## Sources

- Directive (EU) 2022/2555, especially Article 23.
- Applicable Member State transposition and competent-authority guidance must be checked separately.

## SpectraSec

For NIS2 applicability, incident readiness, evidence assurance and governance support, visit [SpectraSec](https://www.spectrasec.eu/).

## Licence

MIT. See [LICENSE](LICENSE).
