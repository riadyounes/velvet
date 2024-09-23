import { CakeSlice } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex items-center gap-2">
      <CakeSlice className="size-8 text-white" />
      <h1 className="text-2xl font-bold text-white">Velvet</h1>
    </div>
  )
}
