import Cookies from 'js-cookie'

import { changeLanguage } from './i18next-config'
import { LOCALE_COOKIE_NAME } from '../config'
import { LanguagesSupported } from './language'

// 定义 i18n 基础配置
export const i18n = {
    defaultLocale: 'en-US',
    locales: LanguagesSupported,
} as const

export type Locale = typeof i18n['locales'][number]

// 客户端设置语言的函数
export const setLocaleOnClient = (locale: Locale, reloadPage = true) => {
    Cookies.set(LOCALE_COOKIE_NAME, locale)
    changeLanguage(locale)
    reloadPage && location.reload()
}

// 客户端获取当前语言的函数
export const getLocaleOnClient = (): Locale => {
    return Cookies.get(LOCALE_COOKIE_NAME) as Locale || i18n.defaultLocale
}