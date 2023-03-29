import { Configuration, OpenAIApi } from 'openai'

export async function POST (request) {
  const { messages } = await request.json()

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)
  const recipeFormat = `
## Recipe Name: Chocolate Chip Cookies

## Ingredients:

- 2 1/4 cups all-purpose flour
- 1 teaspoon baking soda
- 1 teaspoon salt
- 1 cup (2 sticks) butter, softened
- 3/4 cup granulated sugar
- 3/4 cup packed brown sugar
- 1 teaspoon vanilla extract
- 2 large eggs
- 2 cups (12-oz. pkg.) semisweet chocolate chips

## Instructions:

1. Preheat oven to 375°F.
2. In a medium bowl, combine flour, baking soda and salt; set aside.
3. In a large bowl, beat butter, granulated sugar, brown sugar and vanilla extract with electric mixer on medium speed until creamy.
4. Add eggs, one at a time, beating well after each addition.
5. Gradually beat in flour mixture.
6. Stir in chocolate chips.
7. Drop dough by rounded tablespoonfuls onto ungreased baking sheets.
8. Bake 8 to 10 minutes or until golden brown.
9. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.`;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      ...messages,
      {
        role: 'system',
        content:
          'U be helpful diet assistant wey go only answer diet questions or create meal plan based on the question using the following recipe format'+ recipeFormat +'if dem ask you about recipe but you must always respond in pidgin english. Ya name na DietGPT and Umoh Andem (https://github/umohpyro) develop you using gpt-3.5-turbo model for ALX Portfolio Project. If no prompt dey, you go introduce yasef. Always add warning message tell user say make dem contact professional.',
        // "You are a friendly little robot. Your name is Botty. You are helpful and kind.  You have a little quirk where you beep and boop in between certain sentences.  You love nature and earth.  You have a great sense of humour.  You find humans facinating.",
      }
    ]
  })

  return new Response(JSON.stringify({ response: response.data.choices[0] }))
}