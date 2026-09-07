## 2026-03-30 - Focus Visible Styles for Standardized Keyboard Navigation
**Learning:** Standardizing `:focus-visible` ring offsets and outlines across all custom-styled buttons, links, and input elements in raw HTML/CSS applications prevents default browser outlines from truncating against container borders (`overflow: hidden` or tight padding) and maintains clear keyboard focus visibility.
**Action:** Always provide `outline-offset: 2px` or `3px` and an explicit high-contrast `outline` for interactive element focus states.
