/* eslint-disable */
// Performance configuration for the Velvet Bolo website
export const PERFORMANCE_CONFIG = {
  // Critical resources to preload
  criticalResources: [
    {
      href: '/logo-velvet-black.svg',
      as: 'image',
      type: 'image/svg+xml',
    },
    {
      href: '/assets/bolo2.jpg',
      as: 'image',
    },
    {
      href: '/assets/velvet.jpg',
      as: 'image',
    },
  ],

  // External domains to preconnect
  preconnectDomains: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://wa.me',
    'https://velvet.goomer.app',
  ],

  // DNS prefetch domains
  dnsPrefetchDomains: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//wa.me',
    '//velvet.goomer.app',
  ],

  // Image optimization settings
  imageOptimization: {
    // Modern format priorities (Next.js supported formats)
    formats: ['image/avif', 'image/webp'],
    
    // Quality settings per format
    quality: {
      avif: 80,    // AVIF: Excellent compression, 80% quality
      webp: 85,    // WebP: Good compression, 85% quality
      jpeg: 90,    // JPEG: Fallback, 90% quality (handled by Next.js)
    },
    
    // Responsive image sizes
    sizes: {
      thumbnail: '(max-width: 640px) 100vw, 200px',
      small: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px',
      medium: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px',
      large: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px',
      hero: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px',
    },
    
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  },

  // Lazy loading settings
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '100px',
    delay: 100,
  },

  // Cache settings
  cache: {
    images: 'public, max-age=31536000, immutable',
    scripts: 'public, max-age=31536000, immutable',
    styles: 'public, max-age=31536000, immutable',
  },

  // Performance budgets
  performanceBudget: {
    firstContentfulPaint: 2000, // 2 seconds
    largestContentfulPaint: 4000, // 4 seconds
    firstInputDelay: 100, // 100ms
    cumulativeLayoutShift: 0.1, // 0.1
  },

  // Image performance targets
  imagePerformance: {
    // File size targets (gzipped)
    maxFileSize: {
      thumbnail: 20,    // 20KB
      small: 50,        // 50KB
      medium: 100,      // 100KB
      large: 200,       // 200KB
      hero: 300,        // 300KB
    },
    
    // Loading time targets
    maxLoadTime: {
      critical: 1000,   // 1 second
      important: 2000,  // 2 seconds
      normal: 3000,     // 3 seconds
    },
    
    // Format adoption targets (Next.js supported)
    formatAdoption: {
      avif: 0.8,        // 80% of users
      webp: 0.95,       // 95% of users
      jpeg: 1.0,        // 100% of users (Next.js fallback)
    },
  },
}

// Utility functions for performance optimization
export const performanceUtils = {
  // Debounce function for performance
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },

  // Throttle function for performance
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  // Intersection Observer options
  getIntersectionObserverOptions() {
    return {
      threshold: PERFORMANCE_CONFIG.lazyLoading.threshold,
      rootMargin: PERFORMANCE_CONFIG.lazyLoading.rootMargin,
    }
  },

  // Image format detection
  async detectImageFormatSupport() {
    const supportsAvif = await new Promise<boolean>((resolve) => {
      const img = new window.Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A='
    })

    const supportsWebP = await new Promise<boolean>((resolve) => {
      const img = new window.Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAADsAD+JaQAA3AAAAAA'
    })

    return { supportsAvif, supportsWebP }
  },

  // Get optimal image format (Next.js supported)
  getOptimalImageFormat(supportsAvif: boolean, supportsWebP: boolean): 'avif' | 'webp' | 'jpeg' {
    if (supportsAvif) return 'avif'
    if (supportsWebP) return 'webp'
    return 'jpeg' // Next.js will handle JPEG fallback automatically
  },

  // Calculate image quality based on format
  getImageQuality(format: 'avif' | 'webp' | 'jpeg'): number {
    return PERFORMANCE_CONFIG.imageOptimization.quality[format]
  },
}
