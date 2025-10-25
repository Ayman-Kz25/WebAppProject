function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

test('Email validation works correctly', () => {
  const invalid = "invalidEmail";
  expect(validateEmail(invalid)).toBe(false);
});

test('Valid email passes validation', () => {
  const valid = "student@example.com";
  expect(validateEmail(valid)).toBe(true);
});
