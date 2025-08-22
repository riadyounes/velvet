import './globals.css'

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
          className="fixed bottom-4 right-4 flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg transition-all hover:bg-green-600"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Link>
      </body>
    </html>
  )
}
