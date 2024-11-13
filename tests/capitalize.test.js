 
const capitalize = require('../modules/capitalize');

test('takes a string and capitalizes it', () => {
    expect(capitalize("string")).toBe("String");
})

test('handles single-character strings', () => {
    expect(capitalize("a")).toBe("A");
})

test('returns and empty string when imput is empty too', () => {
    expect(capitalize("")).toBe("");
})

test('handles non-string inputs, returning an empty string', () => {
    expect(capitalize(12345)).toBe("");
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
})

test('doesnt change an already capitalized string', () => {
    expect(capitalize("String")).toBe("String");
});