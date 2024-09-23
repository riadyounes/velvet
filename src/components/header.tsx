import { CakeSlice } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-primary w-full">
      <div className="flex justify-between items-center max-w-[1200px] min-h-20 mx-auto p-6">
        <div className="flex items-center gap-2">
          <CakeSlice className="size-8 text-white" />
          <h1 className="text-white text-2xl font-bold">Velvet</h1>
        </div>
        <div>navegação</div>
      </div>
    </div>
  )
}
