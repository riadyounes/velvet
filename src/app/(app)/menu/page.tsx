"use client"
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'cakes', name: 'Bolos' },
  { id: 'cookies', name: 'Cookies' },
  { id: 'coffee', name: 'Café' },
  { id: 'snacks', name: 'Salgados' },
  { id: 'drinks', name: 'Bebidas' },
]

const products = [
  {
    id: 1,
    name: 'Red Velvet',
    price: 89.9,
    image: '/assets/velvet.jpg',
    category: 'cakes',
  },
  {
    id: 2,
    name: 'Chocolate Trufado',
    price: 99.9,
    image: '/assets/velvet.jpg',
    category: 'cakes',
  },
  {
    id: 3,
    name: 'Morango com Chantilly',
    price: 79.9,
    image: '/assets/velvet.jpg',
    category: 'cakes',
  },
  {
    id: 4,
    name: 'Café Expresso',
    price: 12.9,
    image: '/assets/velvet.jpg',
    category: 'coffee',
  },
  // Adicione mais produtos aqui para outras categorias
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('cakes')
  const selectedCategoryName = categories.find(
    (category) => category.id === selectedCategory
  )?.name

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  )

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-brand-900">
        Cardápio Velvet
      </h1>

      {/* Filtros de categorias */}
      <div className="mb-8">
        {/* Filtro com botões para telas maiores */}
        <div className="hidden sm:flex justify-center space-x-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.id ? 'bg-primary text-white' : ''
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Dropdown para mobile usando Shadcn UI */}
        <div className="sm:hidden flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary text-white">
                {selectedCategoryName || 'Selecione uma categoria'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="cursor-pointer"
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Animação de produtos filtrados */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Coluna da esquerda: da esquerda, direita: da direita
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={`Foto do ${product.name}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}
