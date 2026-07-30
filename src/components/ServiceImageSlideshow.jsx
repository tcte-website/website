import { useEffect, useState } from 'react'

const SLIDE_INTERVAL_MS = 4500

export default function ServiceImageSlideshow({ images, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedIndexes, setLoadedIndexes] = useState([0])
  const [isDocumentVisible, setIsDocumentVisible] = useState(() => !document.hidden)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreferenceChange = (event) => setPrefersReducedMotion(event.matches)
    mediaQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => mediaQuery.removeEventListener('change', handleMotionPreferenceChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || images.length < 2) return undefined

    const nextIndex = (activeIndex + 1) % images.length
    if (loadedIndexes.includes(nextIndex)) return undefined

    let cancelled = false
    const preloadImage = new window.Image()

    const markAsLoaded = () => {
      if (cancelled) return
      setLoadedIndexes((currentIndexes) => (
        currentIndexes.includes(nextIndex)
          ? currentIndexes
          : [...currentIndexes, nextIndex]
      ))
    }

    const decodeAndMarkAsLoaded = () => {
      if (typeof preloadImage.decode === 'function') {
        preloadImage.decode().then(markAsLoaded, markAsLoaded)
      } else {
        markAsLoaded()
      }
    }

    preloadImage.addEventListener('load', decodeAndMarkAsLoaded, { once: true })
    preloadImage.src = images[nextIndex].src

    if (preloadImage.complete) decodeAndMarkAsLoaded()

    return () => {
      cancelled = true
      preloadImage.removeEventListener('load', decodeAndMarkAsLoaded)
    }
  }, [activeIndex, images, loadedIndexes, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion || !isDocumentVisible || images.length < 2) return undefined

    const nextIndex = (activeIndex + 1) % images.length
    if (!loadedIndexes.includes(nextIndex)) return undefined

    const timerId = window.setTimeout(() => setActiveIndex(nextIndex), SLIDE_INTERVAL_MS)
    return () => window.clearTimeout(timerId)
  }, [activeIndex, images.length, isDocumentVisible, loadedIndexes, prefersReducedMotion])

  const renderedIndexes = prefersReducedMotion ? [0] : loadedIndexes

  return (
    <div className={`relative ${className}`} aria-live="off">
      {renderedIndexes.map((index) => {
        const image = images[index]
        const isActive = prefersReducedMotion ? index === 0 : index === activeIndex

        return (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={index === 0 ? undefined : 'lazy'}
            decoding="async"
            aria-hidden={!isActive}
            className={`absolute inset-0 h-full w-full object-cover ease-in-out transition-[opacity,transform] duration-1000 group-hover:scale-105 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: image.objectPosition ?? 'center' }}
          />
        )
      })}
    </div>
  )
}
