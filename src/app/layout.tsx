import './globals.css'

import type { Metadata } from 'next'

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
      <body className="antialiased">{children}</body>
    </html>
  )
}
