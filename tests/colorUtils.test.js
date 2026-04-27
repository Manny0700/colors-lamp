function formatColorName(color) {
  return color.trim().toLowerCase();
}

test("formats color names correctly", () => {
  expect(formatColorName(" RED ")).toBe("red");
});