'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LanguagesSupported } from './language'

const loadLangResources = (lang: string) => ({
    translation: {
      common: require(`./${lang}/common`).default,
      home: require(`./${lang}/home`).default,
      about: require(`./${lang}/about`).default,
      features: require(`./${lang}/features`).default,
      blog: require(`./${lang}/blog`).default,
      contact: require(`./${lang}/contact`).default,
      docs: require(`./${lang}/docs`).default,
      faq: require(`./${lang}/faq`).default,
      team: require(`./${lang}/team`).default,
      useCases: require(`./${lang}/use-cases`).default,
      components: require(`./${lang}/components`).default,
      digitalAvatar: require(`./${lang}/digital-avatar`).default,
      roadmap: require(`./${lang}/roadmap`).default,
    },
})

// Automatically generate the resources object
const resources = LanguagesSupported.reduce((acc: any, lang: string) => {
    acc[lang] = loadLangResources(lang)
    return acc
}, {})

i18n.use(initReactI18next)
    .init({
        lng: undefined,
        fallbackLng: 'en-US',
        resources,
    })

export const changeLanguage = i18n.changeLanguage
export default i18n