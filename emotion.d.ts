import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      // 添加更多主题变量
    }
    // 添加更多主题配置
  }
}
