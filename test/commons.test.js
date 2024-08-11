describe('TEST COMMONS TOKEN OF REGEX', () => {
  test('Match everything enclose', () => {
    const regex = /match this (?:match that)/g;
    const text = "match this match that";
    expect(text.match(regex)[0]).toBe("match this match that");
  });
  
  test("Capture everything enclose", () => {
    const regex = /match and (capture )+/g;
    const text = "match and capture capture ?";
    expect(text.match(regex)[0]).toBe("match and capture capture ");
  });
});