# is-odd-ai

[![npm version](https://badge.fury.io/js/is-odd-ai.svg)](https://badge.fury.io/js/is-odd-ai)

Why check if something is odd simply, when you can do it with ✨AI✨

`is-odd-ai` is a unique package that utilizes OpenAI's GPT-3.5-turbo model to determine if a number is odd or even. Because sometimes you just want to add a little bit of AI magic to your number checking!

This package is now written in **TypeScript** with full type definitions included!

## Installation

To install `is-odd-ai`, use npm:

```sh
npm install is-odd-ai
```

## Usage

To use `is-odd-ai`, you'll need an OpenAI API key. You can get one by signing up at [OpenAI](https://beta.openai.com/signup/).

1. Create a `.env` file in the root of your project.
2. Add your OpenAI API key to the `.env` file:

```sh
OPENAI_API_KEY=your-api-key
```

### Example

Here's an example of how to use the `is-odd-ai` package in your project:

**JavaScript (CommonJS):**

```javascript
const isOdd = require('is-odd-ai').default;

(async () => {
  const number = 5;
  const result = await isOdd(number);
  console.log(`Is ${number} odd? ${result}`); // Output: Is 5 odd? true
})();
```

**TypeScript:**

```typescript
import isOdd from 'is-odd-ai';

(async () => {
  const number = 5;
  const result = await isOdd(number);
  console.log(`Is ${number} odd? ${result}`); // Output: Is 5 odd? true
})();
```

## API

### `isOdd(number: number): Promise<boolean>`

Checks if a number is odd using OpenAI's GPT-3.5-turbo model.

#### Parameters

- `number` (number) - The number to check.

#### Returns

- `Promise<boolean>` - Resolves to `true` if the number is odd, `false` if even.

#### Throws

- Throws an error if the determination could not be made or if the API request fails.

## TypeScript Support

This package is written in TypeScript and includes type definitions out of the box. No need to install additional `@types` packages!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the Apache 2.0 license.


