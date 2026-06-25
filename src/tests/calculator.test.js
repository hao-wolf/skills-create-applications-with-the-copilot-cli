/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - add       (addition)
 *   - subtract  (subtraction)
 *   - multiply  (multiplication)
 *   - divide    (division)
 *
 * Includes example operations from the reference image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 * as well as edge cases for each operation.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ---------------------------------------------------------------------------
// Addition
// ---------------------------------------------------------------------------
describe('add', () => {
  // Example from image
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive integers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(5, -3)).toBe(2));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds two floating-point numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4.0));
  test('0 + 0 = 0', () => expect(add(0, 0)).toBe(0));
});

// ---------------------------------------------------------------------------
// Subtraction
// ---------------------------------------------------------------------------
describe('subtract', () => {
  // Example from image
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive integers', () => expect(subtract(20, 8)).toBe(12));
  test('result is negative when b > a', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (double negative)', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts two floating-point numbers', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3.0));
  test('0 - 0 = 0', () => expect(subtract(0, 0)).toBe(0));
});

// ---------------------------------------------------------------------------
// Multiplication
// ---------------------------------------------------------------------------
describe('multiply', () => {
  // Example from image
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive integers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies positive and negative numbers', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers (positive result)', () => expect(multiply(-3, -3)).toBe(9));
  test('multiplying by zero returns 0', () => expect(multiply(100, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies two floating-point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10.0));
});

// ---------------------------------------------------------------------------
// Division
// ---------------------------------------------------------------------------
describe('divide', () => {
  // Example from image
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive integers', () => expect(divide(10, 2)).toBe(5));
  test('divides with a floating-point result', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative by a positive', () => expect(divide(-12, 3)).toBe(-4));
  test('divides a negative by a negative (positive result)', () => expect(divide(-9, -3)).toBe(3));
  test('dividing zero by a number returns 0', () => expect(divide(0, 5)).toBe(0));
  test('dividing by one returns the same number', () => expect(divide(15, 1)).toBe(15));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});
