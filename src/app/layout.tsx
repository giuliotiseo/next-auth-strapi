"use client"
import AppBar from '@/components/AppBar'
import Providers from '../components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import NextApolloProvider from '../../graphql/apollo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anapia Orienta',
  description: 'Ti orientiamo a scoprire il tuo potenziale e a riconoscere il tuo talento professionale.',
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
          <NextApolloProvider>
            {children}
          </NextApolloProvider>
        </Providers>
      </body>
    </html>
  )
}
