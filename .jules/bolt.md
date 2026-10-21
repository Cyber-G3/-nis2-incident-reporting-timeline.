## 2026-08-16 - In-place DOM updates for timer intervals & cached Intl formatters
**Learning:** Replacing `innerHTML` on interval ticks destroys and re-parses DOM trees every second, causing GC thrashing and layout reflows. Additionally, creating `Intl.DateTimeFormat` inside frequently called functions incurs significant V8 object instantiation overhead.
**Action:** Prefer in-place DOM `textContent` updates for recurring timer ticks and reuse module-scoped `Intl` formatter instances.
