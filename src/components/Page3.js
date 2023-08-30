import React,{ useState } from 'react'
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});

async function gpt(text) {
    console.log("Waiting...")
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": text
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response.choices[0].message.content)
}

const Page3 = () => {
    const text = "what is the capial of europe"
    gpt(text)
  return (
    <div>Page3</div>
  )
}

export default Page3