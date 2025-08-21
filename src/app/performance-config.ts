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
    quality: 85,
    formats: ['image/webp', 'image/avif'],
    placeholder: 'blur',
    blurDataURL:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
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
}

// Utility functions for performance optimization
export const performanceUtils = {
  // Debounce function for performance
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
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
    limit: number,
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
}
