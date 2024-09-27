import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const metadata: Metadata = {
  title: 'Home',
}

const featuredProducts = [
  {
    name: 'Red Velvet',
    price: 89.9,
    image: '/placeholder.svg?height=400&width=600&text=Red+Velvet',
  },
  {
    name: 'Chocolate Trufado',
    price: 99.9,
    image: '/placeholder.svg?height=400&width=600&text=Chocolate+Trufado',
  },
  {
    name: 'Morango com Chantilly',
    price: 79.9,
    image: '/placeholder.svg?height=400&width=600&text=Morango+Chantilly',
  },
  {
    name: 'Limão Siciliano',
    price: 69.9,
    image: '/placeholder.svg?height=400&width=600&text=Limão+Siciliano',
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Bem-vindo à Velvet</h1>
        <p className="text-xl text-gray-600">
          Bolos artesanais que encantam todos os sentidos
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Nossos Destaques
        </h2>
        <Carousel className="mx-auto w-full">
          <CarouselContent>
            {featuredProducts.map((product, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <div className="p-1">
                  <Card>
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={product.image}
                        alt={`Bolo ${product.name}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-2 text-xl font-semibold">
                        {product.name}
                      </h3>
                      <p className="mb-2 text-lg font-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="mt-8 text-center">
          <Link href="/cardapio">
            <Button>Ver Cardápio Completo</Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-semibold">Sobre Nós</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Nossa+História"
              alt="Equipe Velvet"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-600">
              A Velvet nasceu da paixão por criar bolos deliciosos e visualmente
              deslumbrantes. Desde 2010, temos o prazer de adoçar os momentos
              especiais de nossos clientes com nossas criações artesanais.
            </p>
            <Link href="/sobre">
              <Button variant="outline">Conheça Nossa História</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Bolos de Casamento
        </h2>
        <div className="relative mb-6 h-96">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Bolos+de+Casamento"
            alt="Bolo de Casamento Elegante"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="mb-4 text-center text-gray-600">
          Transforme seu dia especial em um momento inesquecível com nossos
          bolos de casamento personalizados.
        </p>
        <div className="text-center">
          <Link href="/bolos-de-casamento">
            <Button>Explore Nossos Bolos de Casamento</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Entre em Contato
        </h2>
        <div className="rounded-lg bg-gray-100 p-8">
          <p className="mb-4 text-center text-gray-600">
            Estamos aqui para tornar sua experiência com a Velvet ainda mais
            doce. Não hesite em nos contatar para pedidos especiais, dúvidas ou
            feedback.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contato">
              <Button>Fale Conosco</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
