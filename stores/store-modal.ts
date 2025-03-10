export const useStoreModal = defineStore('store-modal', () => {
  const open = ref(false)

  function onOpen() {
    open.value = true
  }

  function onClose() {
    open.value = false
  }

  return {
    open,
    onOpen,
    onClose,
  }
})
