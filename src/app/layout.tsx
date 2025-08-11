import './globals.css'

import { MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Link from 'next/link'

import Footer from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    template: '%s | Velvet bolo',
    default: 'Velvet',
  },
  description: 'Bem-vindo ao Velvet, a sua loja de bolos deliciosos.',
}

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jost.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full flex-grow">{children}</main>
        <Footer />
        <Link
          href="https://wa.me/554199422377?text=Olá! Quero fazer um pedido com a Velvet. Gostaria de mais informações. Vocês podem me ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 rounded-full bg-green-500 p-3 text-white shadow-lg transition-all hover:bg-green-600"
        >
          <MessageCircle size={32} />
        </Link>
      </body>
    </html>
  )
}
