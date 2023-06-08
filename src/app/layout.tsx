"use client"
import localFont from 'next/font/local';
import { Outfit } from 'next/font/google';
import AppBar from '@/components/AppBar'
import Providers from '../components/Providers'
import NextApolloProvider from '../../graphql/apollo'
import './globals.css'
import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// Fonts config ------------------------------------------------------------------------
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const switzer = localFont({
  src: [
    {
      path: '../assets/typography/Switzer-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/typography/Switzer-Light.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-switzer'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className={`${outfit.variable} ${switzer.variable} font-sans`}>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
