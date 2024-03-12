import type { Handler } from "@netlify/functions"

export const handler: Handler = async (event, context) => {
    return {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message: "Hola World" }),
        statusCode: 200,
  }
}