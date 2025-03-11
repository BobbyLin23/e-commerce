import { useQuery } from '@tanstack/vue-query'

export function useGetStores() {
  return useQuery({
    queryKey: ['stores'],
    queryFn: async () => {
      const { data } = await useFetch(`/api/stores`, {
        method: 'GET',
      })
      return data.value
    },
  })
}
