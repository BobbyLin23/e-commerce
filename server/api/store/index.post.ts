import prisma from '~/lib/prisma'
import { createStoreSchema } from '~/schemas'

export default defineEventHandler(async (event) => {
  try {
    const { userId } = event.context.auth

    if (!userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized: No user ID provided',
      })
    }

    const result = await readValidatedBody(event, body => createStoreSchema.safeParse(body))

    if (!result.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request: Invalid input',
      })
    }

    const { name } = result.data

    const store = await prisma.store.create({
      data: {
        name,
        userId,
      },
    })

    return store
  }
  catch (error) {
    console.error(error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
