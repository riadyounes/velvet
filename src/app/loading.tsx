export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 to-white">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="mx-auto h-20 w-48 animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-brand-200 border-t-brand-700"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-48 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Loading Message */}
        <p className="mt-8 text-lg text-brand-700">Carregando...</p>
      </div>
    </div>
  )
}
