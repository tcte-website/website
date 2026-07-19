import { useEffect, useRef, useState } from 'react'

export default function DeferredVideo({
  src,
  poster,
  className,
  loadWhenVisible = false,
  ariaLabel,
}) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [canLoad, setCanLoad] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData

    if (reducedMotion || saveData) {
      return undefined
    }

    if (loadWhenVisible && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCanLoad(true)
            observer.disconnect()
          }
        },
        { rootMargin: '300px' },
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
    }

    const activate = () => {
      setCanLoad(true)
      window.clearTimeout(timerId)
      window.removeEventListener('pointerdown', activate)
      window.removeEventListener('keydown', activate)
      window.removeEventListener('scroll', activate)
    }
    window.addEventListener('pointerdown', activate, { once: true })
    window.addEventListener('keydown', activate, { once: true })
    window.addEventListener('scroll', activate, { once: true, passive: true })
    const timerId = window.setTimeout(activate, 12000)

    return () => {
      window.clearTimeout(timerId)
      window.removeEventListener('pointerdown', activate)
      window.removeEventListener('keydown', activate)
      window.removeEventListener('scroll', activate)
    }
  }, [loadWhenVisible])

  useEffect(() => {
    if (!canLoad || !videoRef.current || !('IntersectionObserver' in window)) {
      return undefined
    }

    const video = videoRef.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })

    observer.observe(video)
    return () => observer.disconnect()
  }, [canLoad])

  return (
    <div ref={containerRef} className="h-full w-full">
      <video
        ref={videoRef}
        autoPlay={canLoad}
        loop
        muted
        playsInline
        preload="none"
        poster={loadWhenVisible && !canLoad ? undefined : poster}
        className={className}
        aria-label={ariaLabel}
      >
        {canLoad && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
