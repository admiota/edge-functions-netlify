import type { Handler } from "@netlify/functions"

export const handler: Handler = async (event, context) => {
    const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;
    if (!myImportantVariable) {
        throw 'Missing MY_IMPORTANT_VARIABLE';
    }
    return {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ myImportantVariable }),
        statusCode: 200,
  }
}