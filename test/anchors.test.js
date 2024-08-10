describe('TEST ANCHOR OF REGEX', () => {
  test('Start of string', () => {
    const regex = /^\w+/;
    const text = "start of string";
    expect(text.match(regex)[0]).toBe("start");
  });

  test("Start of string", () => {
    const regex = /^\w+/;
    const text = "start of string";
    expect(text.match(regex)[0]).toBe("start");
  });

  test("End of string", () => {
    const regex = /\w+$/;
    const text = "end of string";
    expect(text.match(regex)[0]).toBe("string");
  });

  test("A Word Boundary", () => {
    const regex = /d\b/g;
    const text = "word boundaries are odd";
    expect(text.match(regex)[0]).toBe("d");
    expect(text.match(regex)[1]).toBe("d");
    expect(text.match(regex)[2]).toBeUndefined();
  });
});