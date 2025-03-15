import { CakeSlice } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import VerticalCarousel from '@/components/ui/carousel'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <div className="mx-auto">
      <VerticalCarousel />

      <section className="bg-white px-6 py-20 md:px-0">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
            <h2 className="mb-6 text-4xl font-light text-brand-500 md:text-5xl">
              NOSSA LOJA
            </h2>
            {/* <h4 className="mx-auto mb-4 max-w-[400px] text-lg font-semibold md:mx-0">
              Há 10 anos confeitamos sabores únicos para comemorações e
              presentes criativos.
            </h4> */}
            <p className="mx-auto max-w-[500px] md:mx-0">
              Bem-vindo à Velvet, a confeitaria onde cada bolo é uma obra de
              arte criada com amor e dedicação por Isabel. Nossa missão é adoçar
              os momentos especiais da sua vida com sabores inesquecíveis e
              qualidade incomparável.
            </p>
            <div className="mt-8">
              <Link href="/menu">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-2xl border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  Veja Mais
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:w-1/2">
            <img
              src="/assets/bolo.png"
              alt="Delicious cupcakes and pastries"
              className="w-64 md:w-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-20 md:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center text-4xl text-brand-500 md:text-5xl">
            NOSSOS DESTAQUES
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              {
                title: 'Sabores Irresistíveis',
                text: 'Oferecemos uma variedade de bolos que vão desde os clássicos, como chocolate e baunilha, até combinações exclusivas.',
              },
              {
                title: 'Atendimento Personalizado',
                text: 'Nossa equipe está sempre pronta para auxiliar na escolha do bolo perfeito, garantindo que cada detalhe seja conforme o desejado.',
              },
              {
                title: 'Entrega Rápida',
                text: 'Sabemos da importância de receber seu bolo no momento certo. Por isso, contamos com um serviço de entrega eficiente para que tudo saia conforme o planejado.',
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <CakeSlice size={42} className="mb-3 text-brand-500" />
                <h2 className="text-lg font-semibold text-brand-950">
                  {item.title}
                </h2>
                <p className="leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <Image
                src="/assets/bolo2.jpg"
                alt="Mesa de doces para eventos"
                className="h-[300px] w-full object-cover md:h-[500px]"
                width={500}
                height={300}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center bg-brand-500 p-6 text-center text-white md:w-3/5 md:p-10 md:text-left">
              <div>
                <h2 className="mb-6 text-4xl font-light md:text-5xl">
                  FESTAS E EVENTOS
                </h2>
                <p className="mb-4 max-w-[600px] text-lg font-normal leading-8">
                  Nossa equipe está sempre pronta para tornar o seu evento
                  especial, seja casamento, evento corporativo ou pequenas
                  comemorações. Acreditamos que todas as ocasiões merecem ser
                  celebradas em grande estilo.
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

      <section className="relative overflow-hidden px-6 py-20 md:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 w-full text-center md:mb-0 md:w-1/2 md:text-left">
              <h2 className="mb-6 text-4xl font-light text-brand-500 md:text-5xl">
                NOSSA CHEF
              </h2>
              <p className="mb-6 max-w-[500px] font-medium leading-8 text-gray-700">
                Com um toque contemporâneo, Mariana Abouhamad reinventa
                sobremesas clássicas, valorizando os ricos ingredientes
                brasileiros. Como ela mesmo diz, &quot;um evento pode estar
                cheio de momentos emocionantes e especiais, mas a mesa de doces
                traz consigo um dos mais gostosos!&quot;
              </p>
              <Link href="/sobre-chef">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-2xl border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  Veja mais
                </Button>
              </Link>
            </div>

            <div className="w-full md:w-1/3">
              <img
                src="/assets/dona.jpg"
                alt="Nossa Chef"
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
