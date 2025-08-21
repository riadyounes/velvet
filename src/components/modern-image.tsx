'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ModernImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function ModernImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
}: ModernImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [supportsAvif, setSupportsAvif] = useState(false)
  const [supportsWebP, setSupportsWebP] = useState(false)

  useEffect(() => {
    // Check browser support for modern formats
    const checkFormatSupport = async () => {
      // Check AVIF support
      const avifSupported = await new Promise<boolean>((resolve) => {
        const img = new window.Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src =
          'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
      })

      // Check WebP support
      const webpSupported = await new Promise<boolean>((resolve) => {
        const img = new window.Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src =
          'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAADsAD+JaQAA3AAAAAA'
      })

      setSupportsAvif(avifSupported)
      setSupportsWebP(webpSupported)
    }

    checkFormatSupport()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Format support indicator for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute right-0 top-0 rounded-bl bg-black/70 p-1 text-xs text-white">
          {supportsAvif ? 'AVIF' : supportsWebP ? 'WebP' : 'JPEG'}
        </div>
      )}
    </div>
  )
}

// Utility hook for format detection
export function useImageFormatSupport() {
  const [supportsAvif, setSupportsAvif] = useState(false)
  const [supportsWebP, setSupportsWebP] = useState(false)

  useEffect(() => {
    const checkFormats = async () => {
      const avifSupported = await new Promise<boolean>((resolve) => {
        const img = new window.Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src =
          'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
      })

      const webpSupported = await new Promise<boolean>((resolve) => {
        const img = new window.Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src =
          'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAADsAD+JaQAA3AAAAAA'
      })

      setSupportsAvif(avifSupported)
      setSupportsWebP(webpSupported)
    }

    checkFormats()
  }, [])

  return { supportsAvif, supportsWebP }
}
