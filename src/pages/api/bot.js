import { Configuration, OpenAIApi } from 'openai'
import { withMethods } from '@/lib/api-middlewares/with-methods'

// Pages API route on purpose: Next 13.2 app route handlers wrap the Request in a
// Proxy, and on Node 24 reading its body throws "Cannot read private member #state".
async function handler (req, res) {
  const { messages } = req.body

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

  return res.status(200).json({ response: response.data.choices[0] })
}

export default withMethods(['POST'], handler)
