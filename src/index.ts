import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

interface OpenAIMessage {
  role: string;
  content: string;
}

interface OpenAIRequestData {
  model: string;
  messages: OpenAIMessage[];
  temperature: number;
}

interface OpenAIChoice {
  message: {
    content: string;
  };
}

interface OpenAIResponse {
  choices: OpenAIChoice[];
}

/**
 * Checks if a number is odd using OpenAI's GPT-3.5-turbo model.
 * 
 * @param number - The number to check
 * @returns A promise that resolves to true if the number is odd, false if even
 * @throws Error if unable to determine if the number is odd or even, or if the API request fails
 * 
 * @example
 * ```typescript
 * const result = await isOdd(5);
 * console.log(result); // true
 * ```
 */
async function isOdd(number: number): Promise<boolean> {
  try {
    // Construct the request payload
    const requestData: OpenAIRequestData = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Is ${number} odd or even?` }],
      temperature: 0.7
    };

    // Make a POST request to OpenAI API
    const response = await axios.post<OpenAIResponse>(
      'https://api.openai.com/v1/chat/completions',
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    // Parse the response
    const { choices } = response.data;
    const answer = choices[0].message.content.trim().toLowerCase();

    // Determine if the response indicates odd or even
    if (answer.includes('odd')) {
      return true;
    } else if (answer.includes('even')) {
      return false;
    } else {
      throw new Error('Unable to determine if number is odd or even.');
    }
  } catch (error) {
    console.error('Error querying OpenAI:', error);
    throw error;
  }
}

export default isOdd;
