import { NextResponse } from 'next/server'

import { OpenAI } from 'openai'

import { validateInputPrompt } from '@/utils/validations'
import { getInnerText } from '@/utils/texts'

import { EXAMPLE_MESSAGES_GENERATE_DOCKERFILE, SYSTEM_MESSAGE_GENERATE_DOCKERFILE } from '@/data/prompts'

interface PromptData {
  prompt?: string
}

// type Data =
//   | {
//       message: string
//       dockerfile: string
//     }
//   | {
//       message: string
//     }

export async function POST(request: Request) {
  const { prompt }: Partial<PromptData> = await request.json()

  if (!prompt) {
    return NextResponse.json({ message: 'Prompt not found.' })
  }

  if (!validateInputPrompt(prompt)) {
    return NextResponse.json({
      message: 'Invalid Prompt',
      dockerfile:
        "I'm sorry, I'm not sure what you mean. Could you please provide more context or clarify your request?",
    })
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        SYSTEM_MESSAGE_GENERATE_DOCKERFILE,
        ...EXAMPLE_MESSAGES_GENERATE_DOCKERFILE,
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const resp = chatCompletion.choices[0].message?.content ?? ''

    let dockerfile = getInnerText(resp, '```bash', '```')
    dockerfile = dockerfile.replaceAll('```bash', '').replaceAll('```', '')
    return NextResponse.json({ dockerfile, message: 'ok' })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Error generating Dockerfile' })
  }
}
