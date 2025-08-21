// Image optimization configuration for modern formats
export const IMAGE_OPTIMIZATION_CONFIG = {
  // Modern format priorities (Next.js supported formats only)
  formats: ['image/avif', 'image/webp'] as const,
  
  // Quality settings per format
  quality: {
    avif: 80,    // AVIF: Excellent compression, 80% quality is usually sufficient
    webp: 85,    // WebP: Good compression, 85% quality for web
    jpeg: 90,    // JPEG: Fallback handled by Next.js automatically
  },
  
  // Sizes for responsive images
  sizes: {
    thumbnail: '(max-width: 640px) 100vw, 200px',
    small: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px',
    medium: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px',
    large: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px',
    hero: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px',
  },
  
  // Breakpoints for responsive images
  breakpoints: {
    mobile: 640,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    wide: 1536,
  },
  
  // Placeholder settings
  placeholder: {
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    empty: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==',
  },
  
  // Loading strategies
  loading: {
    eager: 'eager',    // Above the fold, critical images
    lazy: 'lazy',      // Below the fold, non-critical images
  },
  
  // Cache settings
  cache: {
    images: 'public, max-age=31536000, immutable',
    short: 'public, max-age=3600, must-revalidate',
    long: 'public, max-age=31536000, immutable',
  },
}

// Utility functions for image optimization
export const imageOptimizationUtils = {
  // Get the best format based on browser support (Next.js supported formats)
  getBestFormat(supportsAvif: boolean, supportsWebP: boolean): 'avif' | 'webp' | 'jpeg' {
    if (supportsAvif) return 'avif'
    if (supportsWebP) return 'webp'
    return 'jpeg' // Next.js handles JPEG fallback automatically
  },
  
  // Calculate optimal quality for format
  getOptimalQuality(format: 'avif' | 'webp' | 'jpeg'): number {
    return IMAGE_OPTIMIZATION_CONFIG.quality[format]
  },
  
  // Generate responsive sizes string
  getResponsiveSizes(breakpoints: number[]): string {
    return breakpoints
      .map((breakpoint, index) => {
        const width = breakpoint
        const viewport = index === 0 ? '100vw' : `${width}px`
        return `(max-width: ${width}px) ${viewport}`
      })
      .join(', ')
  },
  
  // Check if image should be loaded eagerly
  shouldLoadEagerly(priority: boolean, isAboveFold: boolean): boolean {
    return priority || isAboveFold
  },
  
  // Generate optimized src (Next.js handles format optimization automatically)
  getOptimizedSrc(src: string): string {
    if (!src) return src
    
    // If it's already a Next.js optimized image, return as is
    if (src.includes('_next/image')) return src
    
    // For local images, Next.js will automatically serve the best format
    return src
  },
  
  // Calculate image dimensions for aspect ratio
  calculateDimensions(width: number, aspectRatio: number): { width: number; height: number } {
    return {
      width,
      height: Math.round(width / aspectRatio),
    }
  },
  
  // Generate placeholder for image
  generatePlaceholder(width: number, height: number, color: string = '#f3f4f6'): string {
    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="${color}"/></svg>`
    return `data:image/svg+xml;base64,${btoa(svg)}`
  },
}

// Type definitions
export type ImageFormat = typeof IMAGE_OPTIMIZATION_CONFIG.formats[number]
export type ImageSize = keyof typeof IMAGE_OPTIMIZATION_CONFIG.sizes
export type ImageBreakpoint = keyof typeof IMAGE_OPTIMIZATION_CONFIG.breakpoints
export type ImageLoading = keyof typeof IMAGE_OPTIMIZATION_CONFIG.loading
export type ImageCache = keyof typeof IMAGE_OPTIMIZATION_CONFIG.cache 