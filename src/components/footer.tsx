import { Instagram, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { NavLink } from './nav-link'

export default function Footer() {
  return (
    <footer className="bg-brand-700 py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Company Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-velvet.svg"
                alt="Logo velvet bolo"
                width={200}
                height={80}
              />
            </Link>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold text-gray-100">
              Entre em contato
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-100 transition-colors hover:text-brand-300"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/554199422377"
                className="text-gray-100 transition-colors hover:text-brand-300"
                target="_blank"
              >
                <Phone className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Navigation Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold text-gray-100">
              Links rápidos
            </h3>
            <nav className="flex flex-col space-y-2">
              <NavLink
                href="/"
                className="font-medium text-brand-100 transition-colors hover:text-brand-200 data-[current=true]:text-white"
              >
                Home
              </NavLink>
              <NavLink
                href="/about"
                className="font-medium text-brand-100 transition-colors hover:text-brand-200 data-[current=true]:text-white"
              >
                Sobre nós
              </NavLink>
              <NavLink
                href="/menu"
                className="font-medium text-brand-100 transition-colors hover:text-brand-200 data-[current=true]:text-white"
              >
                Cardápio
              </NavLink>

              <NavLink
                href="/contact"
                className="font-medium text-brand-100 transition-colors hover:text-brand-200 data-[current=true]:text-white"
              >
                Contato
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-100">
          <p>
            &copy; {new Date().getFullYear()} Velvet bolo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
