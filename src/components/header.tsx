import { CakeSlice } from 'lucide-react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <CakeSlice className="size-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Velvet</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white">Open</DropdownMenuTrigger>
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
