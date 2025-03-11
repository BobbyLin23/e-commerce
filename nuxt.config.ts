import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3065,
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/ui',
    '@clerk/nuxt',
    '@pinia/nuxt',
    '@prisma/nuxt',
  ],
  clerk: {
    skipServerMiddleware: true,
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    afterSignOutUrl: '/sign-in',
  },
  components: [
    {
      path: '~/components/modals',
      pathPrefix: false,
    },
    '~/components',
  ],
})
