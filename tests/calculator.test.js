
const calculator = require('../modules/calculator');

// Add tests
test('add operation sums two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('add operation sums two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
});

test('add operation sums a positive and negative numbers', () => {
    expect(calculator.add(1, -2)).toBe(-1);
});

// Substract tests
test('substract operation with two positive numbers', () => {
    expect(calculator.substract(5, 3)).toBe(2);
});

test('substract operation with two negative numbers', () => {
    expect(calculator.substract(-5, -3)).toBe(-2);
});

test('substract operation with a positive and negative numbers', () => {
    expect(calculator.substract(5, -3)).toBe(8);
});

// Divide tests
test('divide operation with two positive numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test('divide operation with two negative numbers', () => {
    expect(calculator.divide(-6, -3)).toBe(2);
});

test('divide operation with a positive and negative numbers', () => {
    expect(calculator.divide(6, -3)).toBe(-2);
});

test('divide "x" by 0 throws and error', () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
});

test('divide 0 by "y" throws and error', () => {
    expect(() => calculator.divide(0, 6)).toThrow("Cannot divide by zero");
});

// Multiply tests
test('multiply operation with two positive numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('multiply operation with two negative numbers', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
});

test('multiply operation with a positive and negative numbers', () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
});

test('multiply by 0 is 0', () => {
    expect(calculator.multiply(8, 0)).toBe(0);
});
