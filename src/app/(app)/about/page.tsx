import type { Metadata } from 'next'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Sobre a Velvet</h1>

      <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Nossa História</h2>
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
        <h2 className="mb-4 text-center text-2xl font-semibold">
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
              <h3 className="mb-2 text-xl font-semibold">Criatividade</h3>
              <p className="text-gray-600">
                Buscamos constantemente inovar em sabores e designs, trazendo
                novas experiências aos nossos clientes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold">Atendimento</h3>
              <p className="text-gray-600">
                Valorizamos cada cliente e nos esforçamos para proporcionar uma
                experiência excepcional em cada interação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { name: 'Maria Silva', role: 'Fundadora e Chef Principal' },
            { name: 'João Santos', role: 'Chef de Confeitaria' },
            { name: 'Ana Oliveira', role: 'Gerente de Atendimento ao Cliente' },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-4 h-48 w-48">
                <Image
                  src={`https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D`}
                  alt={`Foto de ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
