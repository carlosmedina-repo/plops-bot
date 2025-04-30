import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      stream: false,
    });

    // Return the message content directly
    return Response.json({
      content: response.choices[0].message.content
    });

  } catch (error) {
    console.error('Error in chat route:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}