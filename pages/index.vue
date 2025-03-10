<script setup lang="ts">
const { onOpen } = useStoreModal()
</script>

<template>
  <div class="p-2">
    <UButton variant="outline" @click="onOpen">
      Click
    </UButton>
    <UButton>
      123
    </UButton>
    <UserButton />
  </div>
</template>
