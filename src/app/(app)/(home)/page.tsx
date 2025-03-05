import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import {  CakeSlice } from 'lucide-react'
import VerticalCarousel from '@/components/ui/carousel'

export const metadata: Metadata = {
  title: 'Home',
}

const images = [
  {
    src: "assets/background2.jpg",
    alt: "Sobremesa com morango",
    title: "EXCLUSIVIDADE",
    subtitle: "Sabores que emocionam a cada colherada."
  },
  {
    src: "assets/background.jpg",
    alt: "Doce artesanal",
    title: "SABOR ÚNICO",
    subtitle: "Receitas exclusivas que encantam paladares."
  }
]

export default function HomePage() {
  return (
    <div className="mx-auto">
      <VerticalCarousel />

      <section className="py-20 bg-white px-6 md:px-0">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light text-brand-500 mb-6">
              NOSSO ATELIER
            </h2>
            <h4 className="font-semibold text-lg max-w-[400px] mx-auto md:mx-0 mb-4">
              Há 10 anos confeitamos sabores únicos para comemorações e presentes criativos.
            </h4>
            <p className="max-w-[500px] mx-auto md:mx-0">
              Seja bem-vindo ao nosso atelier, onde a magia acontece há uma década. Ao longo desse tempo, temos sido parte de momentos memoráveis, adoçando festas e celebrando as alegrias da vida.
            </p>
            <div className="mt-8">
              <Link href="/menu">
                <Button variant="ghost" size="lg" className="border border-brand-500 text-brand-500 hover:bg-brand-500 rounded-2xl">
                  Veja Mais
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src="/assets/bolo.png" alt="Delicious cupcakes and pastries" className="w-64 md:w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6 md:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center text-4xl md:text-5xl text-brand-500">
            DELÍCIAS QUE ENCANTAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Melhores Ingredientes", text: "Cada ingrediente é cuidadosamente selecionado para garantir a mais alta qualidade." },
              { title: "Processo Artesanal", text: "Nossos doces são confeccionados de forma artesanal, modelados carinhosamente com as mãos." },
              { title: "Excelência nos Detalhes", text: "Cada textura, sabor e apresentação são planejados para oferecer a melhor experiência." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <CakeSlice size={42} className="text-brand-500 mb-3" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
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
            <img 
              src="/assets/bolo2.jpg" 
              alt="Mesa de doces para eventos" 
              className="w-full h-[300px] md:h-[500px] object-cover" 
            />
          </div>
          
          <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center items-center bg-brand-500 text-white text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                FESTAS E EVENTOS
              </h2>
              <p className="leading-8 font-normal text-lg max-w-[600px] mb-4">
                Nossa equipe está sempre pronta para tornar o seu evento especial, seja casamento, evento corporativo ou pequenas comemorações. Acreditamos que todas as ocasiões merecem ser celebradas em grande estilo.
              </p>
              <Link href="/eventos">
                <Button variant="ghost" size="lg" className="border border-white text-white hover:bg-white hover:text-black rounded-2xl">
                  Veja Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-20 relative overflow-hidden px-6 md:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-light text-brand-500 mb-6">
                NOSSA CHEF
              </h2>
              <p className="text-gray-700 mb-6 max-w-[500px] leading-8 font-medium">
                Com um toque contemporâneo, Mariana Abouhamad reinventa sobremesas clássicas, valorizando os ricos ingredientes brasileiros. Como ela mesmo diz, 
                "um evento pode estar cheio de momentos emocionantes e especiais, mas a mesa de doces traz consigo um dos mais gostosos!"
              </p>
              <Link href="/sobre-chef">
                <Button variant="ghost" size="lg" className="border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white rounded-2xl">
                  Veja mais
                </Button>
              </Link>
            </div>

            <div className="w-full md:w-1/3">
              <img src="/assets/dona.jpg" alt="Nossa Chef" className="w-full h-auto object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
