import { cookies, headers } from 'next/headers'
// negotiator: 一个 Node.js 的主要用于 HTTP 请求中的内容协商库
// 在此代码文件中，它主要用于处理浏览器发送的 Accept-Language 请求头，帮助服务器选择最合适的语言版本。
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'

import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { i18n } from '.'
import type { Locale } from '.'

const initI18next = async (lng: Locale, ns: string) => {
    const i18nInstance = createInstance()
    await i18nInstance
      .use(initReactI18next)
      .use(resourcesToBackend((language: string, namespace: string) => import(`./${language}/${namespace}.ts`)))
      .init({
        lng,
        ns,
        fallbackLng: 'en-US',
      })
    return i18nInstance
}
  
export async function useTranslation(lng: Locale, ns = '', options: Record<string, any> = {}) {
    const i18nextInstance = await initI18next(lng, ns)
    return {
      t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
      i18n: i18nextInstance,
    }
}
  
export const getLocaleOnServer = (): Locale => {
    const locales: string[] = i18n.locales
  
    // 首先检查 cookie 中是否有语言设置
    const localeCookie = cookies().get('locale')
    if (localeCookie?.value && locales.includes(localeCookie.value)) {
        return localeCookie.value as Locale
    }
  
    // 如果是首次访问（没有 cookie），返回英文
    return 'en-US' as Locale
}