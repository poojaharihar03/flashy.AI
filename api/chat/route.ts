import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import officeParser from 'officeparser';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const text = formData.get('text') as string;
    const file = formData.get('file') as File;

    if (!text && !file) {
      return NextResponse.json({ error: 'No text or file provided' }, { status: 400 });
    }

    const content = text || await extractTextFromFile(file);
    const flashcards = await generateFlashcards(content);

    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
  }
}

async function extractTextFromFile(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return extractTextFromBuffer(buffer);
}

async function extractTextFromBuffer(buffer: Buffer): Promise<string> {
  try {
    console.log('Extracting text from buffer...');
    const data = await officeParser.parseOfficeAsync(buffer);
    console.log('Extraction successful:', data);
    return data;
  } catch (error) {
    console.error('Error extracting text from buffer:', error);
    throw new Error('Failed to extract text from file');
  }
}

async function generateFlashcards(text: string): Promise<{ front: string; back: string }[]> {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Extract and format flashcards from the following text. Each flashcard should have a question on the front and an answer on the back. Format each flashcard as follows: "Question: [Question Text] Answer: [Answer Text]".\n\n${text}`,
        },
      ],
      model: 'llama3-8b-8192', // Ensure this is a valid model name
    });

    const flashcards = response.choices.flatMap(choice => {
      const content = choice.message.content.trim();
      if (!content) return [];

      return content.split('\n').reduce((acc, line) => {
        const questionMatch = line.match(/^Question:\s*(.*)/);
        const answerMatch = line.match(/^Answer:\s*(.*)/);

        if (questionMatch) {
          acc.push({ front: questionMatch[1].trim(), back: '' });
        } else if (answerMatch && acc.length > 0) {
          acc[acc.length - 1].back = answerMatch[1].trim();
        }

        return acc;
      }, [] as { front: string; back: string }[]);
    });

    return flashcards;
  } catch (error) {
    // console.error('Error extracting flashcards:', error);
    return [];
  }
}

