import { CakeSlice } from 'lucide-react'

export function Header() {
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <CakeSlice className="size-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Velvet</h1>
        </div>
        <div>navegação</div>
      </div>
    </div>
  )
}
