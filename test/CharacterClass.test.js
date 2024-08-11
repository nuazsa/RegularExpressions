describe('TEST CHARACTER CLASS OF REGEX', () => {
  test("A single character of: a, b or c", () => {
    const regex = /[abc]+/g;
    const text = "a bb ccc";
    expect(text.match(regex)[0]).toBe("a");
    expect(text.match(regex)[1]).toBe("bb");
    expect(text.match(regex)[2]).toBe("ccc");
  });
  
  test("A character except: a, b or c", () => {
    const regex = /[^abc]+/g;
    const text = "Anything but abc.";
    expect(text.match(regex)[0]).toBe("Anything ");
    expect(text.match(regex)[1]).toBe("ut ");
  });
  
  test("A character in range: a-z", () => {
    const regex = /[a-z]+/g;
    const text = "Only a-z";
    expect(text.match(regex)[0]).toBe("nly");
    expect(text.match(regex)[1]).toBe("a");
    expect(text.match(regex)[2]).toBe("z");
  });
  
  test("A character not in range: a-z", () => {
    const regex = /[^a-z]+/g;
    const text = "Anything but a-z.";
    expect(text.match(regex)[0]).toBe("A");
    expect(text.match(regex)[1]).toBe(" ");
    expect(text.match(regex)[3]).toBe("-");
  });

  test("A character in range: a-z and A-Z", () => {
    const regex = /[a-zA-Z]+/g;
    const text = "abc123DEF";
    expect(text.match(regex)[0]).toBe("abc");
    expect(text.match(regex)[1]).toBe("DEF");
  });
});