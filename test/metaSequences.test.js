describe('TEST META SEQUENCE OF REGEX', () => {
  test('Any single character', () => {
    const regex = /.+/;
    const text = "a b c";
    expect(text.match(regex)[0]).toBe("a b c");
  });
  
  test("Alternate - match either a or b", () => {
    const regex = /a|b/g;
    const text = "a or b, pick one!";
    expect(text.match(regex)[0]).toBe("a");
    expect(text.match(regex)[1]).toBe("b");
  });
  
  test("Any whitespace character", () => {
    const regex = /\s/g;
    const text = "any whitespace character";
    expect(text.match(regex)[0]).toBe(" ");
  });
  
  test("Any non-whitespace character", () => {
    const regex = /\S+/;
    const text = "any non-whitespace";
    expect(text.match(regex)[0]).toBe("any");
  });
  
  test("Any digit", () => {
    const regex = /\d/g;
    const text = "one: 1, two: 2";
    expect(text.match(regex)[0]).toBe('1');
    expect(text.match(regex)[1]).toBe('2');
  });
  
  test("Any non-digit", () => {
    const regex = /\D+/;
    const text = "one: 1, two: 2";
    expect(text.match(regex)[0]).toBe("one: ");
  });
  
  test("Any word character", () => {
    const regex = /\w+/g;
    const text = "any word character";
    expect(text.match(regex)[0]).toBe("any");
    expect(text.match(regex)[1]).toBe("word");
    expect(text.match(regex)[2]).toBe("character");
  });
  
  test("Any non-word character", () => {
    const regex = /\W+/g;
    const text = "not.a@word%character";
    expect(text.match(regex)[0]).toBe(".");
    expect(text.match(regex)[1]).toBe("@");
    expect(text.match(regex)[2]).toBe("%");
  });
  
  test("Match subpattern number", () => {
    const regex = /(.)\1/;
    const text = "Repeat letters";
    expect(text.match(regex)[0]).toBe("tt");
  });
});