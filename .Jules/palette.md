## 2026-03-30 - Focus-visible styling across interactive UI components
**Learning:** High-contrast outline styles specifically targeted with `:focus-visible` ensure keyboard navigability without introducing disruptive visual outlines for mouse click interactions on custom buttons and links.
**Action:** Always provide explicit `:focus-visible` styling with sufficient contrast (`outline: 2px solid var(--navy); outline-offset: 2px;`) for custom buttons, links, and input elements.
