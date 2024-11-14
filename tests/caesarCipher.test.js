
const caesarCipher = require('../modules/caesarCipher');

test('basic test case', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})

test('handle wrapping around the end of the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('negative shifting', () => {
    expect(caesarCipher('abc', -1)).toBe('zab');
})

test('mixed lower and uppercase letters', () => {
    expect(caesarCipher('aBc', 3)).toBe('dEf');
})

test('non-alphabetical characters', () => {
    expect(caesarCipher('A1b2c3, deF@!', 3)).toBe('D1e2f3, ghI@!');
})

test('emtpy string', () => {
    expect(caesarCipher('', 3)).toBe('');
})

test('all alphabetical characters', () => {
    expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 1))
        .toBe('BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza');
});