import { withMethods } from '@/lib/api-middlewares/with-methods'
import { db } from '@/lib/db'
import { hash } from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

// Pages API route for the same Node 24 body-reading bug as /api/bot.
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body
    const hashed = await hash(password, 12)

    const user = await db.user.create({
      data: {
        email,
        password: hashed
      }
    })

    return res.status(200).json({
      user: {
        email: user.email
      }
    })
  } catch (err: any) {
    return res.status(500).json({
      error: err.message
    })
  }
}

export default withMethods(['POST'], handler)
