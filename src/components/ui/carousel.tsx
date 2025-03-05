'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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

const VerticalCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap()) // Atualiza o indicador
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000) // Alterei para 3s para melhor experiência

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative w-full h-[500px] flex flex-col items-center">
      {/* Carrossel */}
      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="flex flex-col">
          {images.map((image, index) => (
            <div key={index} className="h-[500px] flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-4">
                <h2 className="text-white text-2xl font-light mb-2">
                  {image.title}
                </h2>
                <p className="text-white">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              selectedIndex === index ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default VerticalCarousel
