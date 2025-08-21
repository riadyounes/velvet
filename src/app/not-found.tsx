import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 to-white px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo-velvet-black.svg"
            alt="Velvet Bolo"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-brand-700">404</h1>
          <h2 className="mb-4 text-3xl font-semibold text-brand-800">
            Página não encontrada
          </h2>
          <p className="mb-8 text-lg text-zinc-600">
            Ops! Parece que você se perdeu no caminho. A página que você está
            procurando não existe ou foi movida.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-800"
          >
            Voltar para o início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg border border-brand-700 px-6 py-3 font-medium text-brand-700 transition-colors hover:bg-brand-50"
          >
            Fale conosco
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-brand-800">
            Precisa de ajuda?
          </h3>
          <p className="mb-4 text-zinc-600">
            Entre em contato conosco para fazer seu pedido ou tirar dúvidas:
          </p>
          <div className="space-y-2 text-sm text-zinc-600">
            <p>📱 WhatsApp: (41) 9942-2377</p>
            <p>📍 Centro, Curitiba - PR</p>
            <p>🕒 Segunda a Sábado, 9h às 18h</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8">
          <p className="mb-4 text-sm text-zinc-500">
            Ou navegue pelas nossas páginas:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/sobre" className="text-brand-600 hover:text-brand-700">
              Sobre
            </Link>
            <Link
              href="/nosso-espaco"
              className="text-brand-600 hover:text-brand-700"
            >
              Nosso Espaço
            </Link>
            <Link href="/bolos" className="text-brand-600 hover:text-brand-700">
              Bolos
            </Link>
            <Link
              href="/contato"
              className="text-brand-600 hover:text-brand-700"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
