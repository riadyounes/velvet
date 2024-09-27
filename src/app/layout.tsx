import './globals.css'

import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: {
    template: '%s | Velvet',
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
      <Toaster />
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
