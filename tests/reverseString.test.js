
const reverseString = require('../modules/reverseString');

test('takes a string and returns it reversed', () => {
    expect(reverseString("string")).toBe("gnirts");
})

test('handles single-character string', () => {
    expect(reverseString("a")).toBe("a");
})

test('returns and empty string when imput is empty too', () => {
    expect(reverseString("")).toBe("");
})

test('reverses a sentence with spaces', () => {
    expect(reverseString("This is a reversed sentence")).toBe("ecnetnes desrever a si sihT");
})

test('reverses a string with special characters', () => {
    expect(reverseString("!@# $%^")).toBe("^%$ #@!");
});

test('returns an empty string for non-string input', () => {
    expect(reverseString(12345)).toBe("");
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
});