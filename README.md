# is-odd-ai

[![npm version](https://badge.fury.io/js/is-odd-ai.svg)](https://badge.fury.io/js/is-odd-ai)

A simple utility package that determines if a number is odd using the modulus operator.

`is-odd-ai` provides a straightforward function to check if a number is odd or even using mathematical operations.

## Installation

To install `is-odd-ai`, use npm:

```sh
npm install is-odd-ai
```

## Usage

### Example

Here's an example of how to use the `is-odd-ai` package in your project:

```javascript
const isOdd = require('is-odd-ai');

const number = 5;
const result = isOdd(number);
console.log(`Is ${number} odd? ${result}`); // Output: Is 5 odd? true
```

## Function

### `isOdd(number)`

- **Parameters:** `number` (Number) - The number to check.
- **Returns:** `Boolean` - Returns `true` if the number is odd, `false` if even.
- **Throws:** Throws an error if the input is not a valid number.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the Apache 2.0 license.


