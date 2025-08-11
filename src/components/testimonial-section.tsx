'use client'

import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from 'lucide-react'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Cliente Satisfeita',
      company: 'Amante de Doces',
      avatar: '/placeholder.svg?height=80&width=80',
      content:
        'Os bolos são simplesmente incríveis! O sabor, a textura e a apresentação são impecáveis. Recomendo para qualquer ocasião especial!',
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Fã de Confeitaria',
      company: 'Doces Delícias',
      avatar: '/placeholder.svg?height=80&width=80',
      content:
        'Nunca provei bolos tão saborosos! Feitos com muito carinho e ingredientes de alta qualidade. Perfeitos para celebrar momentos especiais.',
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'Empresária',
      company: 'Eventos & Festas',
      avatar: '/placeholder.svg?height=80&width=80',
      content:
        'Os bolos foram o destaque da nossa festa! Todos os convidados elogiaram o sabor e a apresentação impecável. Simplesmente maravilhoso!',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section className="w-full bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-brand-700 sm:text-4xl md:text-5xl">
            Depoimentos
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja o que nossos clientes estão dizendo sobre nós
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6 md:p-8">
                      <Quote className="mb-4 h-10 w-10 text-brand-500 opacity-50" />
                      <p className="mb-6 text-lg italic md:text-xl">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <Avatar className="mr-4 h-12 w-12">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? 'default' : 'outline'}
                size="icon"
                className="h-2 w-2 rounded-full p-0"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Botão para feedbacks do Google */}
          <div className="mt-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-lg font-semibold text-gray-700">5.0</span>
              <span className="text-gray-600">(200+ avaliações)</span>
            </div>
            <Button
              onClick={() => window.open('https://www.google.com/search?sca_esv=2e47c951dd57c6d7&sxsrf=AE3TifMvZQvPXA8laPvIrFRumjQV09cpYA:1754929692666&q=velvet+bolo+curitiba&sa=X&ved=2ahUKEwi2sb_HloOPAxX8LLkGHfKyLjIQrrQLegQIGRAA&biw=1492&bih=854&dpr=2', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <Star className="h-5 w-5" />
              Ver Todas as Avaliações no Google
              <ExternalLink className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-sm text-gray-500">
              Clique para ver todos os depoimentos e avaliações dos nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
