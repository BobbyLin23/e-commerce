<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  open: boolean
}>()

const emits = defineEmits(['close'])

function onOpenChange() {
  if (props.open) {
    emits('close')
  }
}
</script>

<template>
  <UModal
    :open="open"
    :title="title"
    :description="description"
    :dismissible="false"
    @update:open="onOpenChange"
  >
    <template #body>
      <slot />
    </template>
  </UModal>
</template>
