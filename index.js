// index.js

// Function to check if a number is odd using modulus operator
function isOdd(number) {
    // Validate input
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Input must be a valid number');
    }

    // Use modulus operator to determine if number is odd
    return Math.abs(number) % 2 === 1;
}

module.exports = isOdd;

