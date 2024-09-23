import './globals.css'

import type { Metadata } from 'next'

import { Header } from '@/components/header'

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
    <html lang="en">
      <body>
        <Header />

        <main className="mx-auto w-full max-w-[1200px] py-4">{children}</main>
      </body>
    </html>
  )
}
