import type { Metadata } from 'next'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cardápio',
}

const products = [
  {
    id: 1,
    name: 'Red Velvet',
    price: 89.9,
    image: '/placeholder.svg?height=300&width=300&text=Red+Velvet',
  },
  {
    id: 2,
    name: 'Chocolate Trufado',
    price: 99.9,
    image: '/placeholder.svg?height=300&width=300&text=Chocolate+Trufado',
  },
  {
    id: 3,
    name: 'Morango com Chantilly',
    price: 79.9,
    image: '/placeholder.svg?height=300&width=300&text=Morango+Chantilly',
  },
  {
    id: 4,
    name: 'Limão Siciliano',
    price: 69.9,
    image: '/placeholder.svg?height=300&width=300&text=Limão+Siciliano',
  },
  {
    id: 5,
    name: 'Nozes com Caramelo',
    price: 109.9,
    image: '/placeholder.svg?height=300&width=300&text=Nozes+Caramelo',
  },
  {
    id: 6,
    name: 'Frutas Vermelhas',
    price: 89.9,
    image: '/placeholder.svg?height=300&width=300&text=Frutas+Vermelhas',
  },
]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Cardápio Velvet</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={`Foto do bolo ${product.name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
