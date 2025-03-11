<script setup lang="ts">
const { onOpen } = useStoreModal()

const { data } = useGetStores()

onMounted(() => {
  if (data.value && data.value?.length < 1) {
    onOpen()
    return
  }
  navigateTo(`/${data.value?.[0].id}`)
})
</script>

<template>
  <div />
</template>
