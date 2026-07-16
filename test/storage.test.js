import { SafeStorage } from '../src/storage.js';

// Mock blocked localStorage environment (e.g. third-party iframe in Safari/itch.io)
global.localStorage = {
  getItem: () => { throw new Error("SecurityError: Access is denied for this document."); },
  setItem: () => { throw new Error("SecurityError: Access is denied for this document."); }
};

try {
  // Act
  SafeStorage.setItem('testKey', '123');
  const val = SafeStorage.getItem('testKey');

  // Assert
  console.log("✅ TDD Test Passed: SafeStorage handled SecurityError gracefully.");
} catch (e) {
  console.error("❌ TDD Test Failed: Unhandled exception when accessing localStorage.");
  console.error(e.message);
  process.exit(1);
}
