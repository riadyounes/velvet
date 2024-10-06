import './globals.css'

import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    template: '%s | Velvet bolo',
    default: 'Velvet',
  },
  description: 'Bem-vindo ao Velvet, a sua loja de bolos deliciosos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-[1200px] flex-grow py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
