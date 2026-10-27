## 2026-10-27 - Direct innerHTML re-rendering on 1s timer
**Learning:** Re-rendering entire timeline milestone lists via `.innerHTML` on a 1-second interval causes unnecessary DOM destruction, style recalculations, and full container layout reflows.
**Action:** Update targeted `.countdown` text elements in-place during timer intervals instead of replacing the container's `.innerHTML`.
