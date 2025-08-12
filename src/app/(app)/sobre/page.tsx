import type { Metadata } from 'next'
import Image from 'next/image'

import ImageGallery from '@/components/image-gallery'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a história da Velvet Bolo, nossa confeitaria especializada em Red Velvet e bolos artesanais em Curitiba. Qualidade e tradição em cada receita.',
  keywords:
    'red velvet, velvet, bolos sob encomenda, pronta entrega, bolo inteiro, experiencia, melhor, mais vendido, velvet cake, bolo de pote, bolo em fatia, café, cafeteria, bolo de abacaxi com coco, chocolate, vintage cake, bolo decorado, confeitaria Curitiba, bolos artesanais, história, tradição',
}

export default function SobrePage() {
  return (
    <div className="">
      <div
        className="relative flex h-64 items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bolo2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 opacity-90"></div>
        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="ml-2">
            <h1 className="text-left text-5xl font-bold text-white">Sobre</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-[1200px] px-4">
        <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brand-900">
              Nossa História
            </h2>
            <p className="mb-4 text-gray-600">
              Somos uma confeitaria curitibana especializada em bolos. A Velvet
              nasceu inspirada no Red Velvet. Ele foi o ponto de partida da
              nossa história, e até hoje é o nosso carro-chefe. Mas não paramos
              por aí. A partir dele, criamos sabores únicos, com receitas
              pensadas para serem mais equilibradas no paladar e que transformam
              qualquer dia comum em algo especial. Cada bolo é feito com
              ingredientes de qualidade, muito cuidado e amor.
            </p>
            <p className="text-gray-600">
              Mais do que vender bolos, queremos oferecer uma experiência aos
              nossos clientes. Nossa missão é adoçar a vida com afeto e
              autenticidade. Bem-vindo à Velvet. Aqui, cada pedaço conta uma
              história.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/dona.jpg"
              alt="Nossa Chef"
              height={500}
              width={300}
              objectFit="contain"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <ImageGallery />
      </div>
    </div>
  )
}
