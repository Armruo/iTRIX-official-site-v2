import { Metadata } from 'next'
import './css/style.css'
import { Inter, Red_Hat_Display } from 'next/font/google'
import CommonWeb3Layout from "@/components/connect-provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const redhat = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ITRIX - AI Avatar Social Platform',
  description: 'Next-generation intelligent avatar social platform built on Web 3.0 and AI large-model technology',
  icons: {
    icon: '/images/logo-x-round.png'
  }
}

import ClientLayout from './client-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${redhat.variable} font-inter antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight`}>
        <CommonWeb3Layout>
          <ClientLayout>{children}</ClientLayout>
        </CommonWeb3Layout>
      </body>
    </html>
  )
}
