<script setup lang="ts">
import { dark } from '@clerk/themes'

definePageMeta({
  layout: 'auth',
})

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value ? 'dark' : 'light'
  },
})
</script>

<template>
  <SignIn
    :appearance="{
      baseTheme: isDark ? dark : undefined,
    }"
    fallback-redirect-url="/"
  />
</template>
