import { z } from 'zod'

export const createStoreSchema = z.object({
  name: z.string().min(1),
})
export type CreateStoreInput = z.output<typeof createStoreSchema>
