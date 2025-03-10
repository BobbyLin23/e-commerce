<script lang="ts" setup>
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
  <SignUp
    :appearance="{
      baseTheme: isDark ? dark : undefined,
    }"
    fallback-redirect-url="/"
  />
</template>
