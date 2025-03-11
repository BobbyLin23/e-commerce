import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const { userId } = event.context.auth

    if (!userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    }

    const stores = await prisma.store.findMany({
      where: {
        userId,
      },
    })

    return stores
  }
  catch (error) {
    console.error(error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
