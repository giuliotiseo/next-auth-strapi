"use client"
import Providers from '../components/Providers'
import { montserrat, source_sans_pro } from '@/theme/typography';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className={`${montserrat.variable} ${source_sans_pro.variable} min-h-screen`}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
