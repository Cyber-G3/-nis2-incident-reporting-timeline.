## 2026-08-16 - Targeted DOM updates for high-frequency tickers
**Learning:** Re-rendering entire component trees or `innerHTML` in `setInterval(1000)` destroys active DOM selections/focus and causes unnecessary layout recalcs/DOM churn.
**Action:** Update only the specific `textContent` of text nodes during periodic timer callbacks.
