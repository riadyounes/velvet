import './globals.css'

import { MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Link from 'next/link'

import Footer from '@/components/footer'
import { Header } from '@/components/header'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: {
    template: '%s | Velvet Bolo - Bolos Artesanais em Curitiba',
    default: 'Velvet Bolo - Bolos Artesanais e Doces em Curitiba',
  },
  description:
    'Velvet Bolo: Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Qualidade premium, sabores únicos e atendimento personalizado para festas e eventos.',
  keywords:
    'red velvet, velvet, bolos sob encomenda, pronta entrega, bolo inteiro, experiencia, melhor, mais vendido, velvet cake, bolo de pote, bolo em fatia, café, cafeteria, bolo de abacaxi com coco, chocolate, vintage cake, bolo decorado, confeitaria, bolos artesanais, doces, sobremesas, Curitiba, festas, eventos, bolos de casamento, bolos de aniversário, confeitaria artesanal, jardim, bolos',
  authors: [{ name: 'Velvet Bolo' }],
  creator: 'Velvet Bolo',
  publisher: 'Velvet Bolo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.velvetbolo.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.velvetbolo.com.br',
    siteName: 'Velvet Bolo',
    title: 'Velvet Bolo - Bolos Artesanais em Curitiba',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Qualidade premium e sabores únicos para suas celebrações.',
    images: [
      {
        url: '/assets/velvet.jpg',
        width: 1200,
        height: 630,
        alt: 'Velvet Confeitaria - Bolos Artesanais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velvet Bolo - Bolos Artesanais em Curitiba',
    description: 'Bolos artesanais, doces e sobremesas exclusivas em Curitiba',
    images: ['/assets/velvet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GA_MEASUREMENT_ID,
  },
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
    <html lang="pt-BR" className={jost.className} suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Velvet Bolo" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
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
