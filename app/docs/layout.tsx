import { Nothing_You_Could_Do } from 'next/font/google'
import localFont from 'next/font/local'
import ClientLayout from './client-layout'

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../../public/fonts/docs/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: '../../public/fonts/docs/Aspekta-400.woff2',
      weight: '400',
    },    
    {
      path: '../../public/fonts/docs/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/docs/Aspekta-650.woff2',
      weight: '650',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${nycd.variable} ${aspekta.variable} font-aspekta`}>
      <ClientLayout>{children}</ClientLayout>
    </div>
  )
}
