function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
  }