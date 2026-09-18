## 2026-08-16 - Prototype Property Lookup Leakage in Dictionary Lookups
**Vulnerability:** Dynamic country and translation key lookups using bracket notation (`dict[key]`) resolved inherited `Object.prototype` properties (like `toString` or `constructor`) as truthy values rather than triggering defaults.
**Learning:** In plain JavaScript objects, property access returns prototype functions when given keys matching prototype methods, causing runtime errors when properties on expected dictionary objects (e.g. `authority.name`) are accessed.
**Prevention:** Use `Object.hasOwn(dict, key)` to ensure dynamic keys belong directly to the lookup object before retrieving dictionary values.
