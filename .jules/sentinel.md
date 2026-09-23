## 2026-08-16 - DOM XSS via Unescaped Template Strings in innerHTML

**Vulnerability:** Unescaped dynamic workflow and risk values were injected directly into DOM `innerHTML` blocks inside `renderTimeline` and `render` in client-side application `app.js`.

**Learning:** Client-side rendering functions that build HTML strings via template concatenation or mapping over state/form objects bypass browser XSS protections if dynamic user values or serialized draft state are inserted without escaping HTML entities (`&`, `<`, `>`, `"`, `'`). In addition, object property lookups on dictionary objects (such as `AUTHORITIES[key]`) could match inherited properties from `Object.prototype` (e.g. `toString` or `constructor`) if `Object.prototype.hasOwnProperty.call` is not explicitly checked.

**Prevention:** Always sanitize/escape dynamic strings before inserting them into `innerHTML`, or use `textContent` where applicable. Always use `Object.prototype.hasOwnProperty.call(obj, key)` for dynamic property lookups on direct objects.
