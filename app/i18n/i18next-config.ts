'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LanguagesSupported } from './language'

const loadLangResources = (lang: string) => ({
    translation: {
      common: require(`./${lang}/common`).default,
      roadmap: require(`./${lang}/roadmap`).default,
      docs: require(`./${lang}/docs-sidebar`).default
    },
})

// Automatically generate the resources object
const resources = LanguagesSupported.reduce((acc: any, lang: string) => {
    acc[lang] = loadLangResources(lang)
    return acc
}, {})

// 获取初始语言
const getInitialLanguage = () => {
    // 如果在客户端，先检查 cookie
    if (typeof window !== 'undefined') {
        const localeCookie = document.cookie.split(';').find(c => c.trim().startsWith('locale='))
        if (localeCookie) {
            const locale = localeCookie.split('=')[1]
            if (LanguagesSupported.includes(locale)) {
                return locale
            }
        }
    }
    // 默认返回英文
    return 'en-US'
}

i18n.use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: 'en-US',
        resources,
        interpolation: {
            escapeValue: false,
        },
    })

export const changeLanguage = i18n.changeLanguage
export default i18n