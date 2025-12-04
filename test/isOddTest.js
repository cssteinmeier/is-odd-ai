// test/isOddTest.js

const assert = require('assert');
const isOdd = require('../index');

describe('isOdd function', () => {
    it('should return true for odd numbers', () => {
        const result = isOdd(7);
        assert.strictEqual(result, true);
    });

    it('should return false for even numbers', () => {
        const result = isOdd(10);
        assert.strictEqual(result, false);
    });

    it('should handle zero correctly', () => {
        const result = isOdd(0);
        assert.strictEqual(result, false);
    });

    it('should handle negative odd numbers correctly', () => {
        const result = isOdd(-5);
        assert.strictEqual(result, true);
    });

    it('should handle negative even numbers correctly', () => {
        const result = isOdd(-8);
        assert.strictEqual(result, false);
    });

    it('should throw an error for non-numeric input', () => {
        try {
            isOdd('abc');
            // If isOdd does not throw an error for non-numeric input, fail the test
            assert.fail('Expected error to be thrown');
        } catch (error) {
            assert.strictEqual(error instanceof Error, true);
        }
    });
});

