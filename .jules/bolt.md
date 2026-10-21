## 2026-10-12 - In-place DOM updates for timer loops
**Learning:** Periodically replacing container `.innerHTML` in `setInterval` timer callbacks causes repeated DOM destruction, style invalidation, layout reflows, and unnecessary garbage collection.
**Action:** In recurring timer loops (e.g. countdowns), update existing element `textContent` directly rather than re-rendering full HTML component subtrees.
