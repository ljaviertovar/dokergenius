import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

import { validateInputPrompt } from '@/utils/validations'
import { getInnerText } from '@/utils/texts'

import { EXAMPLE_MESSAGES_GENERATE_DOCKERFILE, SYSTEM_MESSAGE_GENERATE_DOCKERFILE } from '@/data/prompts'

export async function POST(request: Request) {
  const { prompt, apikey }: Partial<{ prompt: string; apikey: string }> = await request.json()

  if (!prompt || !apikey) {
    return NextResponse.json({ message: 'Prompt or ApiKey not found.' }, { status: 400 })
  }

  if (!validateInputPrompt(prompt)) {
    return NextResponse.json(
      {
        message: 'Invalid prompt. Please ensure your prompt is correctly formatted.',
      },
      { status: 400 },
    )
  }

  try {
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const openai = new OpenAI({ apiKey: apikey })

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview',
      messages: [
        SYSTEM_MESSAGE_GENERATE_DOCKERFILE,
        ...EXAMPLE_MESSAGES_GENERATE_DOCKERFILE,
        { role: 'user', content: prompt },
      ],
    })

    const resp = chatCompletion.choices[0].message?.content ?? ''
    const dockerfile = getInnerText(resp, '```bash', '```').replaceAll('```bash', '').replaceAll('```', '')

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

    let message = 'Oops! Unexpected error.'

    if (err instanceof Error) {
      message = err.message
    }

    return NextResponse.json({ message }, { status: 200 })
  }
}
