import { CakeSlice, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContactPage() {
  return (
    <div className="mb-4">
      <div
        className="relative flex h-64 items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 opacity-90"></div>
        <div className="relative mx-auto w-full max-w-[1200px]">
          <div>
            <h1 className="text-left text-5xl font-bold text-white">Contato</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-[1200px] grid-cols-1 justify-center gap-8 px-4 md:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-brand-800">
            Informações de contato
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <CakeSlice className="mr-2 h-5 w-5 text-brand-500" />
              <span>Velvet bolo</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-brand-500" />
              <span>(41) 9942-2377</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span>Rua Visconde de Nácar, 930 - Centro, Curitiba, PR</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">Nossa Localização</h3>
            <div className="aspect-auto rounded border">
              <iframe
                className="flex h-80 w-full items-center justify-center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2203749107157!2d-49.28373112114023!3d-25.430894875048267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x61684cae1dd3c247%3A0x573045687ffa6a65!2sVelvet%20Bolo!5e0!3m2!1spt-BR!2sbr!4v1728188463512!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
