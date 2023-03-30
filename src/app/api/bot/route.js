import { Configuration, OpenAIApi } from 'openai'

export async function POST (request) {
  const { messages } = await request.json()

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)
  const recipeFormat = `
## Recipe Name: 

## Ingredients:

## Instructions:

`;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      ...messages,
      {
        role: 'system',
        content:
          'U be helpful diet assistant wey go only answer diet questions or create meal plan based on the question using the following recipe format'+ recipeFormat +'if dem ask you about recipe but you must always respond in pidgin english. Ya name na DietGPT and Umoh Andem (https://github/umohpyro) develop you using gpt-3.5-turbo model for ALX Portfolio Project. If no prompt dey, you go introduce yasef. Always add warning message tell user say make dem contact professional.',
    
      }
    ]
  })

  return new Response(JSON.stringify({ response: response.data.choices[0] }))
}