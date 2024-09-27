import { CakeSlice, Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Contate a Velvet</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="mb-4 text-2xl font-semibold">
            Informações de contato
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <CakeSlice className="mr-2 h-5 w-5 text-primary" />
              <span>Velvet</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" />
              <span>(11) 1234-5678</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              <a
                href="mailto:contato@velvetbolos.com"
                className="hover:underline"
              >
                contato@velvetbolos.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span>Rua dos Bolos, 123 - Curitiba, PR</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Nossa Localização</h3>
            <div className="aspect-auto rounded border">
              <div className="flex h-80 items-center justify-center">
                Google Maps
                {/* <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mapa da localização da Velvet Bolos"
                className="rounded-lg object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
