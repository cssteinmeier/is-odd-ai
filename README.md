# is-odd-ai

[![npm version](https://badge.fury.io/js/is-odd-ai.svg)](https://badge.fury.io/js/is-odd-ai)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Why check if something is odd simply, when you can do it with ✨AI✨

`is-odd-ai` is a unique package that utilizes OpenAI's GPT-3.5-turbo model to determine if a number is odd or even. Because sometimes you just want to add a little bit of AI magic to your number checking!

✨ **Now written in TypeScript** with full type definitions and enhanced type safety!

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

### Features

- ✅ **Full Type Safety**: All function signatures are fully typed
- ✅ **IntelliSense Support**: Get autocomplete and inline documentation in your IDE
- ✅ **Type Definitions Included**: No additional `@types/*` packages required
- ✅ **TSDoc Documentation**: Comprehensive inline documentation
- ✅ **Strict Mode**: Built with TypeScript strict mode enabled

### Type Signature

```typescript
function isOdd(number: number): Promise<boolean>
```

The function accepts a `number` and returns a `Promise<boolean>` that resolves to `true` for odd numbers and `false` for even numbers.

## Development

To contribute to this project or build it locally:

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/rhettlunn/is-odd-ai.git
cd is-odd-ai

# Install dependencies
npm install

# Build the TypeScript source
npm run build

# Run tests
npm test
```

### Project Structure

```
is-odd-ai/
├── src/
│   └── index.ts          # TypeScript source code
├── dist/
│   ├── index.js          # Compiled JavaScript (generated)
│   └── index.d.ts        # Type definitions (generated)
├── test/
│   ├── isOddTest.js      # JavaScript tests
│   └── isOddTest.ts      # TypeScript tests
├── tsconfig.json         # TypeScript configuration
└── package.json          # Package configuration
```

### Build Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run the test suite
- `npm run test:ts` - Run TypeScript tests directly with ts-node

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

When contributing:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes in the `src/` directory
4. Run `npm run build` to compile TypeScript
5. Run `npm test` to ensure tests pass
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## License

This project is licensed under the Apache 2.0 license.


