<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

const route = useRoute()
</script>

<template>
  <div>
    Id: {{ route.params.storeId }}
  </div>
</template>
