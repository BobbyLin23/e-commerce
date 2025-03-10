<script lang="ts" setup>
const store = useStoreModal()
</script>

<template>
  <Modal
    title="Create Store"
    description="Add a new store to manage products and categories"
    :open="store.open"
    @close="store.onClose"
  >
    TODO
  </Modal>
</template>
