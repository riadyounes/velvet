'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'

// Sample image data - replace with your actual image data
const galleryImages = [
  {
    id: 1,
    src: '/assets/bolo2.jpg',
    alt: 'Gallery image 1',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: '/assets/bolo-happy.jpg',
    alt: 'Gallery image 2',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: '/assets/entrada-loja.jpg',
    alt: 'Gallery image 3',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: '/assets/bolo-3.jpg',
    alt: 'Gallery image 4',
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: '/assets/bolo-red.jpg',
    alt: 'Gallery image 5',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: '/assets/bolo-black.jpg',
    alt: 'Gallery image 6',
    width: 800,
    height: 600,
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage,
  )

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(image.id)}
          >
            <div className="relative aspect-square">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
                Ver imagem
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0">
          {selectedImageData && (
            <div className="relative flex max-h-[80vh] w-full items-center justify-center">
              <Image
                src={selectedImageData.src || '/placeholder.svg'}
                alt={selectedImageData.alt}
                width={selectedImageData.width}
                height={selectedImageData.height}
                className="max-h-[80vh] rounded-lg object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
