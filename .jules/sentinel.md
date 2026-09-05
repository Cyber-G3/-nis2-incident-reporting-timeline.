## 2026-09-05 - Unsanitized Workflow State and LocalStorage Draft Parsing
**Vulnerability:** User-controlled workflow status fields and localStorage draft objects were rendered directly into innerHTML or parsed without key filtering, exposing DOM XSS and Prototype Pollution vectors.
**Learning:** Client-side state restored from localStorage or custom input values can pollute Object.prototype if keys like `__proto__` are iterated over form elements, and unescaped status strings passed to DOM innerHTML can execute arbitrary scripts.
**Prevention:** Always escape HTML entities before inserting user-supplied values into innerHTML, and explicitly filter out `__proto__`, `constructor`, and `prototype` keys when restoring draft objects.
