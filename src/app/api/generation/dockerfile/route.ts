import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

import { validateInputPrompt } from '@/utils/validations'
import { getInnerText } from '@/utils/texts'

import { EXAMPLE_MESSAGES_GENERATE_DOCKERFILE, SYSTEM_MESSAGE_GENERATE_DOCKERFILE } from '@/data/prompts'

export async function POST(request: Request) {
  const { prompt }: Partial<{ prompt: string }> = await request.json()

  if (!prompt) {
    return NextResponse.json({ message: 'Prompt not found.' }, { status: 400 })
  }

  if (!validateInputPrompt(prompt)) {
    return NextResponse.json(
      {
        message: 'Invalid prompt. Please ensure your prompt is correctly formatted.',
      },
      { status: 200 },
    )
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        SYSTEM_MESSAGE_GENERATE_DOCKERFILE,
        ...EXAMPLE_MESSAGES_GENERATE_DOCKERFILE,
        { role: 'user', content: prompt },
      ],
    })

    const resp = chatCompletion.choices[0].message?.content ?? ''
    let dockerfile = getInnerText(resp, '```bash', '```').replaceAll('```bash', '').replaceAll('```', '')

    if (!dockerfile || dockerfile.trim() === '') {
      return NextResponse.json(
        {
          message: 'Dokyfile could not generate a .Dockerfile. Please refine your prompt with more context or details.',
        },
        { status: 200 },
      )
    }

    return NextResponse.json({ dockerfile, message: 'ok' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Oops! Unexpected error.' }, { status: 200 })
  }
}
