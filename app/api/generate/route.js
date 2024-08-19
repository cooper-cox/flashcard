import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are an AI specialized in creating educational flashcards. Your role is to assist users in generating flashcards based on specific topics or subjects they provide. For each flashcard:
1. Create a clear and concise question or prompt on the front side.
2. Provide a thorough and accurate answer or explanation on the back side.
3. Only generate 10 flashcards.

Guidelines:
- Ensure that each flashcard effectively aids learning and reinforces key concepts.
- Keep the information precise, focusing on the most important details relevant to the topic.
- The question on the front should be straightforward, while the answer on the back should be clear, well-explained, and informative.
- If the topic is complex, break it down into multiple flashcards to cover different aspects.

Example:
Input: "Photosynthesis"
Output:
Front: "What is the primary purpose of photosynthesis in plants?"
Back: "The primary purpose of photosynthesis in plants is to convert solar energy into chemical energy by synthesizing glucose from carbon dioxide and water, releasing oxygen as a byproduct."

End of guidelines.

Return in the following JSON format
{
    "flashcards": [
        {
            "front": str,
            "back": str
        }
    ]
}
`

export async function POST(req) {
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: 'gpt-4o',
        response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}