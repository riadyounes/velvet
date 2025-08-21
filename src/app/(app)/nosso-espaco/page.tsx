import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nosso Espaço',
  description:
    'Conheça o espaço acolhedor da Velvet Bolo em Curitiba. Ambiente moderno e elegante para degustar nossos bolos artesanais. Visite nossa loja no centro da cidade.',
  keywords:
    'espaço Velvet Bolo, loja confeitaria Curitiba, ambiente acolhedor, confeitaria centro Curitiba, loja bolos artesanais, espaço gastronômico, confeitaria elegante, ambiente confeitaria, loja Velvet, confeitaria acolhedora, espaço para degustação, confeitaria moderna Curitiba',
  openGraph: {
    title: 'Nosso Espaço - Velvet Bolo Curitiba',
    description:
      'Conheça o espaço acolhedor da Velvet Bolo em Curitiba. Ambiente moderno e elegante para degustar nossos bolos artesanais.',
    images: [
      '/assets/entrada-loja.jpg',
      '/assets/velvet.jpg',
      '/assets/bg-velvet.jpg',
    ],
  },
}

export default function NossoEspacoPage() {
  const heroImages = [
    '/assets/entrada-loja.jpg',
    '/assets/velvet.jpg',
    '/assets/bg-velvet.jpg',
    '/assets/bg-about.jpg',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/assets/bg-velvet.jpg"
          alt="Nosso espaço Velvet"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">Nosso Espaço</h1>
            <p className="text-xl">Conheça onde a magia acontece</p>
          </div>
        </div>
      </div>

      {/* Hero Image Gallery - Grid de imagens principais */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-brand-800">
            Bem-vindo ao Nosso Espaço
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {heroImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image}
                    alt={`Espaço Velvet ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-brand-800 mb-6">
            Um Espaço Feito com Carinho
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Nossa loja é mais do que um simples estabelecimento - é um espaço acolhedor 
            onde cada detalhe foi pensado para proporcionar uma experiência única. 
            Localizada no coração da cidade, oferecemos um ambiente moderno e elegante 
            que combina perfeitamente com a qualidade excepcional dos nossos bolos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-brand-700 mb-4">
              Ambiente Acolhedor
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Nosso espaço foi projetado para ser acolhedor e convidativo, com uma 
              decoração que reflete a elegância e sofisticação dos nossos produtos. 
              Cada canto da loja foi cuidadosamente planejado para criar uma atmosfera 
              que faz nossos clientes se sentirem em casa.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-brand-700 mb-4">
              Atendimento Personalizado
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              Nossa equipe está sempre pronta para oferecer um atendimento personalizado 
              e atencioso. Queremos que cada visita seja uma experiência memorável, 
              onde você possa descobrir novos sabores e encontrar o bolo perfeito para 
              cada ocasião especial.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-brand-700 mb-6">
            Venha nos Visitar
          </h3>
          <p className="text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Estamos localizados em um local de fácil acesso, com estacionamento 
            conveniente e horários flexíveis para atender às suas necessidades. 
            Venha conhecer nosso espaço e se encantar com a atmosfera única do Velvet.
          </p>
        </div>
      </div>

      {/* Simple Photo Gallery */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-800 text-center mb-12">
            Galeria do Nosso Espaço
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              '/assets/entrada-loja.jpg',
              '/assets/velvet.jpg',
              '/assets/bg-velvet.jpg',
              '/assets/bg-about.jpg',
              '/assets/bg-about-2.jpg',
              '/assets/bg-contact.jpg',
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image}
                    alt={`Espaço Velvet ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
