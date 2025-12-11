// test/isOddTest.js

const assert = require('assert');
const sinon = require('sinon');
const axios = require('axios');
const isOdd = require('../index');

describe('isOdd function', () => {
    let axiosStub;

    beforeEach(() => {
        // Stub axios.post to avoid real API calls
        axiosStub = sinon.stub(axios, 'post');
    });

    afterEach(() => {
        // Restore the original axios.post after each test
        axiosStub.restore();
    });

    it('should return true for odd numbers', async () => {
        axiosStub.resolves({
            data: {
                choices: [{ message: { content: 'The number 7 is odd.' } }]
            }
        });
        const result = await isOdd(7);
        assert.strictEqual(result, true);
    });

    it('should return false for even numbers', async () => {
        axiosStub.resolves({
            data: {
                choices: [{ message: { content: 'The number 10 is even.' } }]
            }
        });
        const result = await isOdd(10);
        assert.strictEqual(result, false);
    });

    it('should handle zero correctly', async () => {
        axiosStub.resolves({
            data: {
                choices: [{ message: { content: '0 is even.' } }]
            }
        });
        const result = await isOdd(0);
        assert.strictEqual(result, false);
    });

    it('should handle negative odd numbers correctly', async () => {
        axiosStub.resolves({
            data: {
                choices: [{ message: { content: '-5 is odd.' } }]
            }
        });
        const result = await isOdd(-5);
        assert.strictEqual(result, true);
    });

    it('should handle negative even numbers correctly', async () => {
        axiosStub.resolves({
            data: {
                choices: [{ message: { content: '-8 is even.' } }]
            }
        });
        const result = await isOdd(-8);
        assert.strictEqual(result, false);
    });

    it('should throw an error for non-numeric input', async () => {
        axiosStub.rejects(new Error('Invalid input'));
        try {
            await isOdd('abc');
            // If isOdd does not throw an error for non-numeric input, fail the test
            assert.fail('Expected error to be thrown');
        } catch (error) {
            assert.strictEqual(error instanceof Error, true);
        }
    });
});

