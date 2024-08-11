describe('TEST FLAGS/MODIFIERS OF REGEX', () => {
  test('Global', () => {
    const regex = /this/g;
    const text = "match this and again this";
    expect(text.match(regex)[0]).toBe("this");
    expect(text.match(regex)[1]).toBe("this");
  });
  
  test('Multiline', () => {
    const regex = /^d.+\d{3}$/m;
    const text = "digits coming up 443";
    expect(text.match(regex)[0]).toBe("digits coming up 443");
  });
  
  test('Case Insesitive', () => {
    const regex = /a/gi;
    const text = "A or a";
    expect(text.match(regex)[0]).toBe("A");
    expect(text.match(regex)[1]).toBe("a");
  });
  
  test('Sticky', () => {
    const regex = /a|bc/gy;
    const text = "abcXabc";
    expect(text.match(regex)[0]).toBe("a");
    expect(text.match(regex)[1]).toBe("bc");
  });
  
  test('Enable Uniqode', () => {
    const regex = /𝌆/u;
    const text = "a𝌆b";
    expect(text.match(regex)[0]).toBe("𝌆");
  });
  
});