import { Metadata } from 'next'
import './css/style.css'
// import { Inter, Red_Hat_Display } from 'next/font/google'
import CommonWeb3Layout from "@/components/connect-provider";
import localFont from 'next/font/local'

import I18nServer from '@/components/i18n-server'
import { getLocaleOnServer } from '@/app/i18n/server'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap'
// })

// const redhat = Red_Hat_Display({
//   subsets: ['latin'],
//   variable: '--font-red-hat-display',
//   display: 'swap'
// })

const cabinet = localFont({
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ITRIX - AI Avatar Social Platform',
  description: 'Next-generation intelligent avatar social platform built on Web 3.0 and AI large-model technology',
  icons: {
    icon: '/images/logo-x-round-3.png'
  }
}

import ClientLayout from './client-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const locale = getLocaleOnServer()

  return (
    <html lang={locale ?? 'en'} suppressHydrationWarning>
      <body className={`${cabinet.variable} font-aspekta antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}>
        <CommonWeb3Layout>
          <ClientLayout>
            <I18nServer>{children}</I18nServer>
          </ClientLayout>
        </CommonWeb3Layout>
      </body>
    </html>
  )
}
