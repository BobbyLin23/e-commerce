<script setup lang="ts">
const { onOpen } = useStoreModal()
</script>

<template>
  <div class="p-2">
    <UButton @click="onOpen">
      Click
    </UButton>
  </div>
</template>
