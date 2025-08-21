import { Calendar, Clock, ExternalLink, ShoppingBag } from 'lucide-react'
import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Nossos Bolos',
  description:
    'Descubra nossa seleção especial de bolos velvet artesanais em Curitiba. Red Velvet, Pink Velvet, Coffee Velvet, Black Velvet e muito mais! Qualidade premium e sabores únicos.',
  keywords:
    'bolos velvet Curitiba, Red Velvet Curitiba, Pink Velvet, Coffee Velvet, Black Velvet, Martha Velvet, Tropical Velvet, Pistachio Velvet, Rainbow Velvet, bolos artesanais, confeitaria Curitiba, bolos sob encomenda, bolos para festas, bolos de aniversário, bolos de casamento, confeitaria artesanal, bolos exclusivos',
  openGraph: {
    title: 'Nossos Bolos - Velvet Bolo Curitiba | 8 Sabores Únicos de Velvet',
    description:
      '8 sabores incríveis de bolos velvet artesanais em Curitiba. Red Velvet, Pink Velvet, Coffee Velvet e muito mais! Qualidade premium e sabores únicos!',
    images: [
      '/assets/bolo-red.jpg',
      '/assets/bolo-happy.jpg',
      '/assets/bolo-black.jpg',
    ],
  },
}

const sabores = [
  {
    nome: 'Red Velvet',
    cor: 'border-red-500 shadow-red-200',
    imagem: '/assets/bolo-red.jpg',
    alt: 'Bolo Red Velvet da Velvet Bolo - Massa vermelha com cobertura cremosa',
  },
  {
    nome: 'Pink Velvet',
    cor: 'border-pink-500 shadow-pink-200',
    imagem: '/assets/bolo-happy.jpg',
    alt: 'Bolo Pink Velvet da Velvet Bolo - Massa rosa com decoração elegante',
  },
  {
    nome: 'Coffee Velvet',
    cor: ' border-amber-900 shadow-amber-200',
    imagem: '/assets/bolo-3.jpg',
    alt: 'Bolo Coffee Velvet da Velvet Bolo - Massa de café com sabor intenso',
  },
  {
    nome: 'Black Velvet',
    cor: 'border-gray-800 shadow-gray-200',
    imagem: '/assets/bolo-black.jpg',
    alt: 'Bolo Black Velvet da Velvet Bolo - Massa escura com decoração sofisticada',
  },
  {
    nome: 'Martha Velvet',
    cor: 'border-amber-700 shadow-amber-200',
    imagem: '/assets/bolo-sobre.png',
    alt: 'Bolo Martha Velvet da Velvet Bolo - Massa roxa com recheio especial',
  },
  {
    nome: 'Tropical Velvet',
    cor: 'border-yellow-400 shadow-yellow-200',
    imagem: '/assets/bolo2.jpg',
    alt: 'Bolo Tropical Velvet da Velvet Bolo - Massa verde com sabores tropicais',
  },
  {
    nome: 'Pistachio Velvet',
    cor: 'border-emerald-600 shadow-emerald-200',
    imagem: '/assets/bolo.png',
    alt: 'Bolo Pistachio Velvet da Velvet Bolo - Massa de pistache com textura única',
  },
  {
    nome: 'Rainbow Velvet',
    cor: 'border-4 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500  shadow-rainbow',
    imagem: '/assets/velvet.jpg',
    alt: 'Bolo Rainbow Velvet da Velvet Bolo - Massa colorida com cores vibrantes',
  },
]

export default function NossosBolosPage() {
  return (
    <div className="min-h-screen border-t">
      <div className="container mx-auto px-6 py-16">
        {/* Título Principal */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-brand-900 md:text-6xl">
            Nossos Bolos
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 md:text-2xl">
            Descubra nossa seleção especial de bolos velvet e muito mais!
          </p>
        </div>

        {/* Seção de Sabores */}
        <section className="mb-20" aria-labelledby="sabores-titulo">
          <h2
            id="sabores-titulo"
            className="mb-12 text-center text-3xl font-bold text-brand-900"
          >
            8 Sabores Incríveis para Você se Apaixonar
          </h2>
          <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sabores.map((sabor, index) => (
              <div key={index} className="group cursor-pointer text-center">
                <div
                  className={`relative mx-auto mb-6 h-56 w-full max-w-xs overflow-hidden rounded-xl border-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${sabor.cor}`}
                >
                  {/* Imagem real do bolo */}
                  <img
                    src={sabor.imagem}
                    alt={sabor.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay sutil com a cor do sabor */}
                  <div
                    className={`absolute inset-0 opacity-20 ${sabor.nome === 'Rainbow Velvet' ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500' : sabor.cor.includes('red') ? 'bg-red-500' : sabor.cor.includes('pink') ? 'bg-pink-500' : sabor.cor.includes('amber') ? 'bg-amber-700' : sabor.cor.includes('gray') ? 'bg-gray-800' : sabor.cor.includes('purple') ? 'bg-purple-500' : sabor.cor.includes('green') ? 'bg-green-500' : 'bg-emerald-600'}`}
                  ></div>
                </div>
                <p className="text-xl font-bold text-gray-700 transition-colors group-hover:text-brand-700 group-hover:text-gray-900">
                  {sabor.nome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cards de Serviços */}
        <section
          className="mb-12 grid gap-8 md:grid-cols-2"
          aria-labelledby="servicos-titulo"
        >
          <h2 id="servicos-titulo" className="sr-only">
            Nossos Serviços
          </h2>
          {/* Bolos à Pronta Entrega */}
          <Card className="shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-brand-900">
                Bolos à Pronta Entrega
              </CardTitle>
              <CardDescription className="text-lg">
                Disponíveis todos os dias
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-gray-600">
                Todos os dias temos opções de bolos à pronta entrega, em vários
                tamanhos, disponíveis para retirada na loja ou para entrega.
              </p>
              <div className="mb-4 flex justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  <Clock className="mr-1 h-4 w-4" />
                  Disponível hoje
                </Badge>
              </div>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Ver Disponibilidade
              </Button>
            </CardContent>
          </Card>

          {/* Bolos Sob Encomenda */}
          <Card className="shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-brand-900">
                Bolos Sob Encomenda
              </CardTitle>
              <CardDescription className="text-lg">
                Personalizados especialmente para você
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-gray-600">
                Fazemos bolos sob encomenda, inclusive com decoração especial!
                Pedimos que o pedido seja feito com pelo menos 3 dias de
                antecedência.
              </p>
              <div className="mb-4 flex justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  <Calendar className="mr-1 h-4 w-4" />3 dias de antecedência
                </Badge>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Fazer Encomenda
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action para Cardápio Completo */}
        <section
          className="rounded-lg bg-white p-8 text-center shadow-lg"
          aria-labelledby="cardapio-titulo"
        >
          <h2
            id="cardapio-titulo"
            className="mb-4 text-2xl font-bold text-brand-900"
          >
            Bolos Festivos Especiais
          </h2>
          <p className="mb-6 text-gray-600">
            Temos uma seleção completa de bolos festivos para todas as ocasiões
            especiais!
          </p>
          <Button
            size="lg"
            className="bg-brand-600 text-white hover:bg-brand-700"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Conferir Cardápio Completo
          </Button>
        </section>
      </div>
    </div>
  )
}
