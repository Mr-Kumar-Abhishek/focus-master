# Developer Testing & Debugging

## Issue: Game failing to load on itch.io game page

### Root Cause Analysis
When hosted in an embedded iframe on third-party sites like itch.io, the game can fail to load (showing a blank screen) due to two primary reasons:

1. **LocalStorage SecurityError:** Many modern browsers (like Safari) block access to `localStorage` inside cross-origin iframes (third-party contexts) to prevent cross-site tracking. When `main.js` attempts to call `localStorage.getItem()` or `localStorage.setItem()`, the browser throws a `SecurityError`. Because this error is currently unhandled, the JavaScript execution halts completely, preventing the game from initializing.
2. **Service Worker Path:** The Service Worker registration in `index.html` uses an absolute path (`/sw.js`). In itch.io's environment, games are hosted in a subdirectory (e.g., `/html/12345/`). The absolute path causes the browser to look at the root domain, resulting in a 404 error.

### TDD Approach (Test-Driven Development)
To resolve the `localStorage` crash, we will follow TDD principles:
1. **Write a Failing Test:** Create a unit test (`test/storage.test.js`) that simulates a blocked `localStorage` environment (throwing an error upon access) and verifies that our application crashes.
2. **Implement Safe Wrapper:** Develop a `SafeStorage` wrapper (`src/storage.js`) that wraps `localStorage` access in `try...catch` blocks, falling back to a harmless in-memory object or simply returning `null` when access is denied.
3. **Pass the Test:** Update the test to use `SafeStorage` and verify it no longer throws an exception.
4. **Integrate:** Replace direct `localStorage` calls in `main.js` with the `SafeStorage` wrapper.
5. **Fix SW Path:** Change `/sw.js` to `./sw.js` in `index.html`.
