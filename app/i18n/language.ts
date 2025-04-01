import data from './languages.json'
export type Item = {
    value: number | string
    name: string
    example: string
}

export type I18nText = {
    'en-US': string    // 英语（美国）
    'zh-Hans': string  // 简体中文
    'zh-Hant': string  // 繁体中文
    'ja-JP': string    // 日语（日本）
    'ko-KR': string    // 韩语（韩国）
    'es-ES': string    // 西班牙语（西班牙）
    'fr-FR': string    // 法语（法国）
    'de-DE': string    // 德语（德国）
    'ru-RU': string    // 俄语（俄罗斯）
    // 'pt-BR': string    // 葡萄牙语（巴西）
    // 'it-IT': string    // 意大利语（意大利）
    // 'uk-UA': string    // 乌克兰语（乌克兰）
    // 'vi-VN': string    // 越南语（越南）
    // 'ro-RO': string    // 罗马尼亚语（罗马尼亚）
    // 'pl-PL': string    // 波兰语（波兰）
    // 'hi-IN': string    // 印地语（印度）
    // 'fa-IR': string    // 波斯语（伊朗）
    // 'sl-SI': string    // 斯洛文尼亚语（斯洛文尼亚）
    // 'th-TH': string    // 泰语（泰国）
}

export const languages = data.languages

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
    if (locale === 'zh-Hans')
      return locale.replace('-', '_')
  
    return LanguagesSupported[0].replace('-', '_')
}
