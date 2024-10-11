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
    image: '/assets/velvet.jpg',
  },
  {
    name: 'Chocolate Trufado',
    price: 99.9,
    image: '/assets/velvet.jpg',
  },
  {
    name: 'Morango com Chantilly',
    price: 79.9,
    image: '/assets/velvet.jpg',
  },
  {
    name: 'Limão Siciliano',
    price: 69.9,
    image: '/assets/velvet.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto">
      <div className="relative h-[400px] pb-12 text-center">
        <Image
          src="/assets/bg-velvet.jpg"
          alt="Velvet"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="bg-brand-700 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-6 text-center text-3xl font-semibold text-brand-200">
            Nossos Destaques
          </h2>
          <Carousel
            className="mx-auto w-full"
            opts={{
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                  <div className="p-1">
                    <Card>
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={product.image}
                          alt={`Bolo ${product.name}`}
                          className="rounded-xl border"
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
            <Link href="/menu">
              <Button variant="outline">Ver Cardápio Completo</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-6 text-center text-3xl font-semibold text-brand-900">
            Sobre a Velvet bolo
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="p-5 md:w-1/2">
              <Image
                src="/assets/velvet.jpg"
                alt="Equipe Velvet"
                width={300}
                height={100}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="px-5 text-center md:w-1/2">
              <p className="mx-auto pb-4 text-gray-600 lg:max-w-[500px]">
                A Velvet nasceu da paixão por criar bolos deliciosos e
                deslumbrantes. Desde 2010, temos o prazer de adoçar os momentos
                especiais de nossos clientes com nossas criações artesanais.
              </p>
              <Link href="/about">
                <Button>Conheça Nossa História</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-700 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-6 text-center text-3xl font-semibold text-brand-50">
            Bolos de Casamento
          </h2>
          <div className="p-5 md:w-1/2 lg:mx-auto">
            <Image
              src="/assets/velvet.jpg"
              alt="Bolos de casamento"
              width={300}
              height={100}
              layout="responsive"
              className="rounded-lg object-cover"
            />
          </div>
          <p className="mx-auto mb-4 text-center font-semibold text-brand-100 lg:max-w-[500px]">
            Transforme seu dia especial em um momento inesquecível com nossos
            bolos de casamento personalizados.
          </p>
          <div className="text-center">
            <Link href="/bolos-de-casamento">
              <Button variant="outline">
                Explore Nossos Bolos de Casamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="py-6 text-center text-3xl font-semibold text-brand-900">
            Entre em Contato
          </h2>
          <div className="p-8">
            <p className="mx-auto mb-4 text-center text-gray-600 lg:max-w-[500px]">
              Estamos aqui para tornar sua experiência com a Velvet bolo ainda
              mais doce. Não hesite em nos contatar para pedidos especiais,
              dúvidas ou feedback.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact">
                <Button>Fale Conosco</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
