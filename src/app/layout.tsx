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
    default: 'Velvet Bolo - Bolos Artesanais e Doces em Curitiba | Red Velvet',
  },
  description:
    'Velvet Bolo: Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet, Pink Velvet e sabores únicos. Qualidade premium, sabores únicos e atendimento personalizado para festas e eventos.',
  keywords:
    'Velvet Bolo Curitiba, bolos artesanais Curitiba, Red Velvet Curitiba, confeitaria artesanal, bolos sob encomenda, bolos para festas, bolos de aniversário, bolos de casamento, doces artesanais, sobremesas exclusivas, confeitaria centro Curitiba, bolos velvet, pink velvet, coffee velvet, black velvet, confeitaria de qualidade, bolos artesanais Curitiba, confeitaria Curitiba',
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
    title:
      'Velvet Bolo - Bolos Artesanais em Curitiba | Red Velvet e Sabores Únicos',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet, Pink Velvet e sabores únicos com qualidade premium para suas celebrações.',
    images: [
      {
        url: '/assets/velvet.jpg',
        width: 1200,
        height: 630,
        alt: 'Velvet Confeitaria - Bolos Artesanais em Curitiba',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velvet Bolo - Bolos Artesanais em Curitiba | Red Velvet',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet e sabores únicos com qualidade premium.',
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
  preload: true,
  fallback: ['system-ui', 'arial'],
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

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/logo-velvet-black.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preload" href="/assets/bolo2.jpg" as="image" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://velvet.goomer.app" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//velvet.goomer.app" />

        {/* Manifest and icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Velvet Bolo" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Performance optimizations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
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
