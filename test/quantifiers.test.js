describe("TEST QUANTIFIER OF REGEX", () => {
  test("Zero or one of a", () => {
    const regex = /ba?/g;
    const text = "ba b a";
    expect(text.match(regex)[0]).toBe("ba");
    expect(text.match(regex)[1]).toBe("b");
  });

  test("Zero or more of a", () => {
    const regex = /ba*/g;
    const text = "a ba baaa b";
    expect(text.match(regex)[0]).toBe("ba");
    expect(text.match(regex)[1]).toBe("baaa");
    expect(text.match(regex)[2]).toBe("b");
  });

  test("One or more of a", () => {
    const regex = /a+/g;
    const text = "a aa aaa aaaa bab baab";
    expect(text.match(regex)[0]).toBe("a");
    expect(text.match(regex)[1]).toBe("aa");
    expect(text.match(regex)[2]).toBe("aaa");
  });

  test("Exactly 3 of a", () => {
    const regex = /a{3}/g;
    const text = "a aa aaa aaaa bab baab";
    expect(text.match(regex)[0]).toBe("aaa");
  });

  test("3 or more of a", () => {
    const regex = /a{3,}/g;
    const text = "a aa aaa aaaa aaaaaa";
    expect(text.match(regex)[0]).toBe("aaa");
    expect(text.match(regex)[1]).toBe("aaaa");
    expect(text.match(regex)[2]).toBe("aaaaaa");
  });

  test("Beetwen 3 and 6 of a", () => {
    const regex = /a{3,6}/g;
    const text = "a aa aaa aaaa aaaaaaaaaa";
    expect(text.match(regex)[0]).toBe("aaa");
    expect(text.match(regex)[1]).toBe("aaaa");
    expect(text.match(regex)[2]).toBe("aaaaaa");
  });

  test("Greedy quantifier", () => {
    const regex = /a.*a/g;
    const text = "greedy can be dangerous at times";
    expect(text.match(regex)[0]).toBe("an be dangerous a");
  });

  test("Lazzy quantifier", () => {
    const regex = /r\w*?/g;
    const text = "r re regex";
    expect(text.match(regex)[0]).toBe("r");
    expect(text.match(regex)[1]).toBe("r");
    expect(text.match(regex)[2]).toBe("r");
  });
});
