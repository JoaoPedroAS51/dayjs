export default defineNuxtConfig({
  modules: ['../src/module', '@unocss/nuxt'],
  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
  }
})
