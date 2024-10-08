'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construir a mensagem formatada
    const whatsappMessage = `Olá! 😊 Meu nome é ${name} e gostaria de falar com a equipe da Velvet. 📧 Meu e-mail é ${email}.

    💬 Mensagem: ${message}

    Aguardo o retorno e agradeço desde já! 🙌`

    // URL do WhatsApp com o número de telefone e mensagem
    const phoneNumber = '554199422377'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Redirecionar para o WhatsApp
    window.open(whatsappURL, '_blank')

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-brand-800">
        Envie-nos uma mensagem
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensagem
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </div>
  )
}
