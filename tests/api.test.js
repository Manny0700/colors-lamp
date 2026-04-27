test("validates API-style JSON color response", () => {
  const response = {
    success: true,
    colors: ["red", "blue", "green"]
  };

  expect(response.success).toBe(true);
  expect(Array.isArray(response.colors)).toBe(true);
  expect(response.colors.length).toBeGreaterThan(0);
});