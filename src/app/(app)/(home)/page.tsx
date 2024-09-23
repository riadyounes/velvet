import { CakeSlice } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex gap-2 items-center">
      <CakeSlice className="size-8 text-white" />
      <h1 className="text-white text-2xl font-bold">Velvet</h1>
    </div>
  )
}
