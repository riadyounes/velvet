import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { NavLink } from './nav-link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  return (
    <div className="w-full bg-brand-500">
      <div className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between p-6">
        <Link href="/">
          <Image
            src="/logo-velvet.svg"
            alt="Logo velvet bolo"
            width={120}
            height={17}
          />
        </Link>

        <nav className="hidden gap-8 lg:flex">
          <NavLink
            href="/menu"
            className="font-medium text-brand-200 transition-colors hover:text-brand-300 data-[current=true]:text-white"
          >
            Cardápio
          </NavLink>
          <NavLink
            href="/about"
            className="font-medium text-brand-200 transition-colors hover:text-brand-300 data-[current=true]:text-white"
          >
            Sobre
          </NavLink>
          <NavLink
            href="/contact"
            className="font-medium text-brand-200 transition-colors hover:text-brand-300 data-[current=true]:text-white"
          >
            Contato
          </NavLink>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white lg:hidden">
            <AlignJustify className="size-7" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/menu">Cardápio</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/about">Sobre</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/contact">Contato</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
