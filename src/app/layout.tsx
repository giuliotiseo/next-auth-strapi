import AppBar from '@/components/AppBar'
import Providers from '../components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
