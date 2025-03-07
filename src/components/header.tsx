import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NavLink } from "./nav-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <div className="w-full bg-white">
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
            href="https://velvet-1.goomer.app/menu?fbclid=PAY2xjawI3E6RleHRuA2FlbQIxMAABplcwotZcbQLuvYxrWlqzpinSOPmQ3YBVW8V7fj3CUwdaJ6xe_2JWLxwuHg_aem_gYO1HPjGeMW3XBmPqg_tUw"
            target="_blank"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:text-brand-700"
          >
            Produtos da loja
          </NavLink>
          <NavLink
            href="https://velvet.goomer.app/menu?fbclid=PAY2xjawI3Ew5leHRuA2FlbQIxMAABpqj83g3KHA4vMpQN3qOZLvO6UosJkmT4NMhugkkJMXauxMbOO0Bo5VgAyw_aem_7v5pAHqkfNsG4KxqazuzVg"
            target="_blank"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:text-brand-700"
          >
            Bolos festivos
          </NavLink>
          <NavLink
            href="/about"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:font-bold data-[current=true]:text-brand-700"
          >
            Sobre
          </NavLink>
          <NavLink
            href="/contact"
            className="font-medium text-zinc-500 transition-colors hover:text-brand-700 data-[current=true]:font-bold data-[current=true]:text-brand-700"
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
              <Link href="/menu" className="font-semibold text-zinc-500">
                Cardápio
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/about" className="font-semibold text-zinc-500">
                Sobre
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/contact" className="font-semibold text-zinc-500">
                Contato
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
