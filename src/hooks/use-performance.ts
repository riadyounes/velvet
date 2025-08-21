'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const { threshold = 0.1, rootMargin = '50px', root = null } = options

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      const isElementIntersecting = entry.isIntersecting

      setIsIntersecting(isElementIntersecting)

      if (isElementIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    },
    [hasIntersected],
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
      root,
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [callback, threshold, rootMargin, root])

  return { elementRef, isIntersecting, hasIntersected }
}

export function useLazyLoad<T>(data: T[], itemsPerPage: number = 10) {
  const [visibleItems, setVisibleItems] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const endIndex = currentPage * itemsPerPage
    const newItems = data.slice(0, endIndex)
    setVisibleItems(newItems)
    setHasMore(endIndex < data.length)
  }, [data, currentPage, itemsPerPage])

  const loadMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [hasMore])

  return {
    visibleItems,
    hasMore,
    loadMore,
    currentPage,
  }
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastRan = useRef<number>(Date.now())

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRan.current >= limit) {
          setThrottledValue(value)
          lastRan.current = Date.now()
        }
      },
      limit - (Date.now() - lastRan.current),
    )

    return () => {
      clearTimeout(handler)
    }
  }, [value, limit])

  return throttledValue
}
