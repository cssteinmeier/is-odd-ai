// test/isOddTest.js

const assert = require('assert');
const isOdd = require('../index');
const { isEven } = require('../index');

describe('isOdd function', () => {
    it('should return true for odd numbers', async () => {
        const result = await isOdd(7);
        assert.strictEqual(result, true);
    });

    it('should return false for even numbers', async () => {
        const result = await isOdd(10);
        assert.strictEqual(result, false);
    });

    it('should handle zero correctly', async () => {
        const result = await isOdd(0);
        assert.strictEqual(result, false);
    });

    it('should handle negative odd numbers correctly', async () => {
        const result = await isOdd(-5);
        assert.strictEqual(result, true);
    });

    it('should handle negative even numbers correctly', async () => {
        const result = await isOdd(-8);
        assert.strictEqual(result, false);
    });

    it('should throw an error for non-numeric input', async () => {
        try {
            await isOdd('abc');
            // If isOdd does not throw an error for non-numeric input, fail the test
            assert.fail('Expected error to be thrown');
        } catch (error) {
            assert.strictEqual(error instanceof Error, true);
        }
    });
});

describe('isEven function', () => {
    it('should return true for even numbers', async () => {
        const result = await isEven(10);
        assert.strictEqual(result, true);
    });

    it('should return false for odd numbers', async () => {
        const result = await isEven(7);
        assert.strictEqual(result, false);
    });

    it('should handle zero correctly', async () => {
        const result = await isEven(0);
        assert.strictEqual(result, true);
    });

    it('should handle negative even numbers correctly', async () => {
        const result = await isEven(-8);
        assert.strictEqual(result, true);
    });

    it('should handle negative odd numbers correctly', async () => {
        const result = await isEven(-5);
        assert.strictEqual(result, false);
    });

    it('should throw an error for non-numeric input', async () => {
        try {
            await isEven('abc');
            // If isEven does not throw an error for non-numeric input, fail the test
            assert.fail('Expected error to be thrown');
        } catch (error) {
            assert.strictEqual(error instanceof Error, true);
        }
    });
});

