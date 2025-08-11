import { CakeSlice, Heart, Star, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import TestimonialSection from '@/components/testimonial-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Velvet Bolo - Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Descubra nossos sabores únicos e qualidade premium.',
  keywords:
    'bolos artesanais Curitiba, confeitaria, doces, sobremesas, festas, eventos, bolos de casamento',
  openGraph: {
    title: 'Velvet Bolo - Bolos Artesanais em Curitiba',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Qualidade premium e sabores únicos.',
    images: ['/assets/bolo2.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="mx-auto">
      <section
        className="relative flex h-[500px] w-full flex-col items-center"
        role="banner"
        aria-label="Hero section"
      >
        <img
          src="/assets/bolo2.jpg"
          alt="Bolo artesanal da Velvet Bolo - Sobremesa gourmet com decoração elegante"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/30 p-4">
          <h1 className="mb-2 text-2xl font-light text-white">EXCLUSIVIDADE</h1>
          <p className="text-white">Sabores que emocionam a cada colherada.</p>
        </div>
      </section>

      <section
        className="bg-white px-6 py-20 md:px-0"
        aria-labelledby="nossa-loja"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
            <h2
              id="nossa-loja"
              className="mb-6 text-4xl font-light text-brand-700 md:text-5xl"
            >
              NOSSA LOJA
            </h2>
            <p className="mx-auto max-w-[500px] md:mx-0">
              A Velvet é mais do que uma confeitaria — é um cantinho acolhedor
              localizado no Centro de Curitiba, onde cada detalhe foi pensado
              para fazer você se sentir em casa. Nossa loja tem cheiro de bolo
              saindo do forno, café passado na hora e um jardim que encanta. E,
              claro, também temos a nossa Monalisa comendo um Red Velvet, porque
              aqui a arte também é doce.
            </p>
            <p className="mx-auto max-w-[500px] md:mx-0">
              É o tipo de lugar onde o tempo desacelera e cada fatia é um
              convite pra viver um momento doce, leve e inesquecível.
            </p>
            <div className="mt-8">
              <Link href="/sobre">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-2xl border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
                >
                  Veja Mais
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:w-1/2">
            <img
              src="/assets/bolo-sobre.png"
              alt="Bolos artesanais da Velvet Confeitaria - Cupcakes e doces decorados com elegância"
              className="w-64 md:w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-gray-100 px-6 py-20 md:px-0"
        aria-labelledby="nossos-destaques"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="nossos-destaques"
            className="mb-10 text-center text-4xl text-brand-700 md:text-5xl"
          >
            NOSSOS DESTAQUES
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              {
                title: 'Qualidade e cuidado em cada ingrediente',
                icon: Heart,
                description: 'Ingredientes selecionados com carinho'
              },
              {
                title: 'Sabores equilibrados, com a doçura na medida certa',
                icon: Star,
                description: 'Receitas testadas e aprovadas'
              },
              {
                title: 'Atendimento atencioso em cada detalhe',
                icon: Users,
                description: 'Foco total no cliente'
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <IconComponent size={42} className="mb-3 text-brand-700" />
                  <h2 className="text-lg font-semibold text-brand-950 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="festas-eventos">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <Image
                src="/assets/bolo2.jpg"
                alt="Mesa decorada com bolos artesanais para festas e eventos - Velvet Confeitaria"
                className="h-[300px] w-full object-cover md:h-[500px]"
                width={500}
                height={300}
                priority={false}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center bg-brand-700 p-6 text-center text-white md:w-3/5 md:p-10 md:text-left">
              <div>
                <h2
                  id="festas-eventos"
                  className="mb-6 text-4xl font-light md:text-5xl"
                >
                  FESTAS E EVENTOS
                </h2>
                <p className="mb-4 max-w-[600px] text-lg font-normal leading-8">
                  Seja casamento, aniversário, festa ou aquele encontro
                  especial, a gente tá aqui pra ajudar a tornar tudo ainda mais
                  especial. Fale com a gente pra saber como fazer a sua
                  celebração ficar do jeitinho Velvet!
                </p>
                {/* <Link href="/eventos">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="rounded-2xl border border-white text-white hover:bg-white hover:text-black"
                  >
                    Veja Mais
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-20 md:px-0"
        aria-labelledby="nossa-chef"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 w-full text-center md:mb-0 md:w-1/2 md:text-left">
              <h2
                id="nossa-chef"
                className="mb-6 text-4xl font-light text-brand-700 md:text-5xl"
              >
                NOSSA CHEF
              </h2>
              <p className="mb-6 max-w-[500px] font-medium leading-8 text-gray-700">
                <span className="font-semibold text-brand-900">
                  Isabel Badalotti
                </span>{' '}
                é o coração da Velvet. Foi na cozinha que ela transformou uma
                receita em um sonho e, depois, em realidade. É ela quem testa,
                ajusta e aprova cada detalhe: da massa ao recheio, da decoração
                ao atendimento. Seu olhar sensível e criativo está presente em
                tudo — nos sabores, nas escolhas da loja, no carinho com os
                clientes. Cada bolo da Velvet carrega um pouco da Isabel: firme
                no propósito, suave na forma, doce na medida certa.
              </p>
              <Link href="/sobre-chef">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-2xl border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
                >
                  Veja mais
                </Button>
              </Link>
            </div>

            <div className="w-full md:w-1/3">
              <img
                src="/assets/dona.jpg"
                alt="Isabel Badalotti - Chef proprietária da Velvet Bolo em Curitiba"
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </div>
  )
}
