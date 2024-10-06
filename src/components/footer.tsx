import { Instagram, Phone } from 'lucide-react'
import Link from 'next/link'

import { NavLink } from './nav-link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Company Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span className="text-2xl font-bold text-primary">YourLogo</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Your company slogan or brief description goes here.
            </p>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold">Entre em contato</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-brand-500 text-gray-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="hover:text-brand-500 text-gray-600 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Navigation Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold">Links rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink
                href="/"
                className="hover:text-brand-300 data-[current=true]:text-brand-500 font-medium text-gray-600"
              >
                Home
              </NavLink>
              <NavLink
                href="/about"
                className="hover:text-brand-300 data-[current=true]:text-brand-500 font-medium text-gray-600"
              >
                Sobre nós
              </NavLink>
              <NavLink
                href="/menu"
                className="hover:text-brand-300 data-[current=true]:text-brand-500 font-medium text-gray-600"
              >
                Cardápio
              </NavLink>

              <NavLink
                href="/contact"
                className="hover:text-brand-300 data-[current=true]:text-brand-500 font-medium text-gray-600"
              >
                Contato
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Velvet. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
