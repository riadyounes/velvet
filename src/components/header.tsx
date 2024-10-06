import { AlignJustify, CakeSlice } from 'lucide-react'
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
    <div className="bg-brand-500 w-full">
      <div className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <CakeSlice className="size-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Velvet</h1>
        </div>

        <nav className="hidden gap-8 lg:flex">
          <NavLink
            href="/menu"
            className="hover:text-brand-300 text-brand-200 font-medium transition-colors data-[current=true]:text-white"
          >
            Cardápio
          </NavLink>
          <NavLink
            href="/about"
            className="hover:text-brand-300 text-brand-200 font-medium transition-colors data-[current=true]:text-white"
          >
            Sobre
          </NavLink>
          <NavLink
            href="/contact"
            className="hover:text-brand-300 text-brand-200 font-medium transition-colors data-[current=true]:text-white"
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
