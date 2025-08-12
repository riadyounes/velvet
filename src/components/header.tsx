import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { NavLink } from './nav-link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'

export function Header() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between p-6">
        <Link href="/">
          <Image
            src="/logo-velvet-black.svg"
            alt="Logo velvet bolo"
            width={120}
            height={17}
          />
        </Link>

        <nav className="hidden gap-8 lg:flex">
          <NavLink
            href="/sobre"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:font-bold data-[current=true]:text-brand-700"
          >
            Sobre
          </NavLink>
          <NavLink
            href="https://velvet-1.goomer.app/menu?fbclid=PAY2xjawI3E6RleHRuA2FlbQIxMAABplcwotZcbQLuvYxrWlqzpinSOPmQ3YBVW8V7fj3CUwdaJ6xe_2JWLxwuHg_aem_gYO1HPjGeMW3XBmPqg_tUw"
            target="_blank"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:text-brand-700"
          >
            Bolos
          </NavLink>
          <NavLink
            href="https://velvet.goomer.app/menu?fbclid=PAY2xjawI3Ew5leHRuA2FlbQIxMAABpqj83g3KHA4vMpQN3qOZLvO6UosJkmT4NMhugkkJMXauxMbOO0Bo5VgAyw_aem_7v5pAHqkfNsG4KxqazuzVg"
            target="_blank"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:text-brand-700"
          >
            Cardápio
          </NavLink>
          <NavLink
            href="/contato"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:font-bold data-[current=true]:text-brand-700"
          >
            Contato
          </NavLink>
        </nav>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify className="size-7" />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 bg-brand-700 p-4">
            <SheetHeader className="text-xl font-bold text-white">
              Menu
            </SheetHeader>
            <SheetClose asChild>
              <NavLink
                href="https://velvet-1.goomer.app/menu?fbclid=PAY2xjawI3E6RleHRuA2FlbQIxMAABplcwotZcbQLuvYxrWlqzpinSOPmQ3YBVW8V7fj3CUwdaJ6xe_2JWLxwuHg_aem_gYO1HPjGeMW3XBmPqg_tUw"
                target="_blank"
                className="font-medium text-white transition-colors"
              >
                Produtos da loja
              </NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink
                href="https://velvet.goomer.app/menu?fbclid=PAY2xjawI3Ew5leHRuA2FlbQIxMAABpqj83g3KHA4vMpQN3qOZLvO6UosJkmT4NMhugkkJMXauxMbOO0Bo5VgAyw_aem_7v5pAHqkfNsG4KxqazuzVg"
                target="_blank"
                className="font-medium text-white transition-colors"
              >
                Bolos festivos
              </NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink
                href="/sobre"
                className="font-medium text-white transition-colors"
              >
                Sobre
              </NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink
                href="/contato"
                className="font-medium text-white transition-colors"
              >
                Contato
              </NavLink>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
