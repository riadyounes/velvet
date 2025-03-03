import type { Metadata } from 'next'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-brand-900">
        Sobre a Velvet bolo
      </h1>

      <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-brand-900">
            Nossa História
          </h2>
          <p className="mb-4 text-gray-600">
            A Velvet nasceu em 2010 da paixão de Maria Silva por criar bolos
            deliciosos e visualmente deslumbrantes. O que começou como um hobby
            na cozinha de casa rapidamente se transformou em um negócio
            próspero, graças ao sabor único e à qualidade incomparável dos
            nossos bolos.
          </p>
          <p className="text-gray-600">
            Hoje, a Velvet é reconhecida como uma das melhores confeitarias
            artesanais da cidade, continuando a inovar e encantar nossos
            clientes com criações únicas e saborosas.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Fundadora Maria Silva na cozinha da Velvet"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-center text-2xl font-semibold text-brand-900">
          Nossa Missão e Valores
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold">Qualidade</h3>
              <p className="text-gray-600">
                Comprometemo-nos a usar apenas os melhores ingredientes e
                técnicas artesanais em cada um de nossos bolos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold text-brand-900">
                Criatividade
              </h3>
              <p className="text-gray-600">
                Buscamos constantemente inovar em sabores e designs, trazendo
                novas experiências aos nossos clientes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold text-brand-900">
                Atendimento
              </h3>
              <p className="text-gray-600">
                Valorizamos cada cliente e nos esforçamos para proporcionar uma
                experiência excepcional em cada interação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
