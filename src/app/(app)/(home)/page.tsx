import { Heart, Star, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import TestimonialSection from '@/components/testimonial-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Velvet Bolo - Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet, Pink Velvet e sabores únicos. Qualidade premium e atendimento personalizado.',
  keywords:
    'Velvet Bolo Curitiba, bolos artesanais Curitiba, Red Velvet Curitiba, confeitaria artesanal, bolos sob encomenda, bolos para festas, bolos de aniversário, bolos de casamento, doces artesanais, sobremesas exclusivas, confeitaria centro Curitiba, bolos velvet, pink velvet, coffee velvet, black velvet, confeitaria de qualidade',
  openGraph: {
    title:
      'Velvet Bolo - Bolos Artesanais em Curitiba | Red Velvet e Sabores Únicos',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet, Pink Velvet e sabores únicos com qualidade premium.',
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
        <Image
          src="/assets/bolo2.jpg"
          alt="Bolo artesanal da Velvet Bolo - Sobremesa gourmet com decoração elegante"
          className="h-full w-full object-cover"
          loading="eager"
          width={1000}
          height={500}
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
                description: 'Ingredientes selecionados com carinho',
              },
              {
                title: 'Sabores equilibrados, com a doçura na medida certa',
                icon: Star,
                description: 'Receitas testadas e aprovadas',
              },
              {
                title: 'Atendimento atencioso em cada detalhe',
                icon: Users,
                description: 'Foco total no cliente',
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <IconComponent size={42} className="mb-3 text-brand-700" />
                  <h2 className="mb-2 text-lg font-semibold text-brand-950">
                    {item.title}
                  </h2>
                  <p className="max-w-[250px] text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-6 py-20 md:px-0"
        aria-labelledby="conheca-espaco"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 w-full text-center md:mb-0 md:w-1/2 md:text-left">
              <h2
                id="conheca-espaco"
                className="mb-6 text-4xl font-light text-brand-700 md:text-5xl"
              >
                CONHEÇA NOSSO ESPAÇO
              </h2>
              <p className="mb-6 max-w-[500px] text-lg leading-8 text-gray-700">
                Venha conhecer pessoalmente o cantinho acolhedor da Velvet Bolo!
                Nossa loja no Centro de Curitiba é um lugar especial onde cada
                detalhe foi pensado para fazer você se sentir em casa.
              </p>
              <p className="mb-8 max-w-[500px] text-lg leading-8 text-gray-700">
                Aqui você encontra um ambiente aconchegante com cheiro de bolo
                saindo do forno, café passado na hora e um jardim que encanta. É
                o tipo de lugar onde o tempo desacelera e cada visita se torna
                um momento inesquecível.
              </p>
              {/* Informações de contato */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/554199422377?text=Olá! Gostaria de saber mais sobre o espaço da Velvet Bolo e como chegar até vocês."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Falar no WhatsApp
                  </Button>
                </a>
                <Link href="/nosso-espaco">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white"
                  >
                    Conhecer o Espaço
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="/assets/entrada-loja.jpg"
                  alt="Entrada da loja Velvet Bolo em Curitiba - Ambiente acolhedor e convidativo"
                  className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 rounded-full bg-brand-700 p-4 text-white shadow-lg">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </div>
            </div>
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
