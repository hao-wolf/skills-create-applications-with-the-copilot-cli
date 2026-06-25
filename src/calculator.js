#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   add <a> <b>       - Addition:       returns a + b
 *   subtract <a> <b>  - Subtraction:    returns a - b
 *   multiply <a> <b>  - Multiplication: returns a * b
 *   divide <a> <b>    - Division:       returns a / b (errors on divide-by-zero)
 *
 * Usage:
 *   node calculator.js <operation> <number1> <number2>
 *
 * Examples:
 *   node calculator.js add 3 5        → 8
 *   node calculator.js subtract 10 4  → 6
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 20 4    → 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b
// Throws an error if b is zero to prevent divide-by-zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// CLI entry point — parse arguments and run the requested operation
function main() {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>');
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }

  console.log(result);
}

// Only run CLI entry point when executed directly (not when imported as a module)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
