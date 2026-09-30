## 2026-09-30 - Inherited Prototype Method Access in Plain Dictionary Objects
**Vulnerability:** Dynamic property access on literal objects (`AUTHORITIES[input.country]` and `ES[value]`) matched inherited `Object.prototype` methods when given keys like `"toString"`, bypassing fallback defaults (`|| AUTHORITIES.EU`).
**Learning:** Plain JS object literals inherit properties from `Object.prototype`. Checking truthiness on `dict[key]` evaluates to `true` for methods like `toString`, returning the Function object instead of falling through to the fallback.
**Prevention:** Always check direct ownership with `Object.prototype.hasOwnProperty.call(dict, key)` before reading values from user-supplied or dynamic keys on plain object dictionaries.
