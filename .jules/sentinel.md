# Sentinel Security Journal

## 2026-10-20 - Safe Object Property Lookup for Authority Records
**Vulnerability:** Object property indexing (`AUTHORITIES[input.country]`) on lookup dictionaries in JavaScript can retrieve inherited `Object.prototype` methods/properties (e.g., `toString`, `valueOf`, `constructor`) if an unexpected input key is provided, leading to unexpected types (e.g. `authority` being a function instead of an object) or runtime errors.
**Learning:** In plain JavaScript objects, missing keys fallback to prototype properties when evaluated with standard dynamic property lookup syntax.
**Prevention:** Always use `Object.hasOwn(dictionary, key)` or `Object.prototype.hasOwnProperty.call(dictionary, key)` when accessing dynamic key lookups on plain objects.
