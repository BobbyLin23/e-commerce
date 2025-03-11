import type { CreateStoreInput } from '~/schemas'
import { useMutation } from '@tanstack/vue-query'

export function useCreateStore() {
  const toast = useToast()
  const router = useRouter()
  const store = useStoreModal()

  return useMutation({
    mutationKey: ['createStore'],
    mutationFn: async (value: CreateStoreInput) => {
      const { data } = await useFetch('/api/store', {
        method: 'POST',
        body: value,
      })

      return data
    },
    onSuccess: (data) => {
      router.push(`/${data.value?.id}`)
      toast.add({
        title: 'Store created successfully!',
        description: 'You can now view your new store.',
        icon: 'i-lucide-circle-check',
        color: 'success',
      })
      store.onClose()
    },
    onError: (error) => {
      toast.add({
        title: 'Uh oh! Something went wrong.',
        description: error.message,
        icon: 'i-lucide-circle-x',
        color: 'error',
      })
    },
  })
}
