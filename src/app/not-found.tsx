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
          <div className="space-y-3 text-sm text-zinc-600">
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/554199422377?text=Olá! Preciso de ajuda. Página não encontrada no site da Velvet Bolo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-4 w-4 text-brand-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(41) 9942-2377</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-4 w-4 text-brand-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Rua Visconde de Nácar, 930 - Centro, Curitiba, PR</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-4 w-4 text-brand-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Segunda a Sexta, 11h às 19h | Sábado, 11h às 18h</span>
            </div>
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
