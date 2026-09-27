import { useEffect, useSyncExternalStore } from 'react'

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value))

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches
const getServerReducedMotion = () => false

/** Progressive enhancement: native scrolling stays in control of the page. */
export default function useCinematicMotion(motionEnabled: boolean) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  )

  useEffect(() => {
    const root = document.documentElement
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    const ambientScenes = Array.from(document.querySelectorAll<HTMLElement>('[data-ambient-scene]'))
    const intersectingAmbientScenes = new Set<HTMLElement>()
    const originallyVisible = new Set(revealElements.filter((element) => element.classList.contains('is-visible')))
    const revealed = new Set(originallyVisible)
    const previousProgress = root.style.getPropertyValue('--scroll-progress')
    const wasMotionReady = root.classList.contains('motion-ready')
    const previousParallax = new Map(parallaxElements.map((element) => [element, element.style.getPropertyValue('--parallax-y')]))
    const appliedOffsets = new Map<HTMLElement, number>()
    let observer: IntersectionObserver | undefined
    let ambientObserver: IntersectionObserver | undefined
    let frame = 0
    let activeMotion = false

    function updateAmbientVisibility() {
      const canAnimate = activeMotion && document.visibilityState === 'visible'
      ambientScenes.forEach((element) => {
        element.classList.toggle('is-ambient-visible', canAnimate && intersectingAmbientScenes.has(element))
      })
    }

    function resetParallax() {
      parallaxElements.forEach((element) => element.style.setProperty('--parallax-y', '0px'))
      appliedOffsets.clear()
    }

    function updateFrame() {
      frame = 0
      if (!activeMotion) return

      const viewportHeight = window.innerHeight
      const scrollableHeight = Math.max(0, root.scrollHeight - viewportHeight)
      const progress = scrollableHeight ? clamp(window.scrollY / scrollableHeight, 0, 1) : 0

      // Read geometry together before writing transforms to avoid layout thrashing.
      const offsets = parallaxElements.map((element) => {
        const bounds = element.getBoundingClientRect()
        const speedValue = Number.parseFloat(element.dataset.parallax ?? '0.12')
        const speed = Number.isFinite(speedValue) ? clamp(speedValue, -1, 1) : 0.12
        const elementCenter = bounds.top + bounds.height / 2 - (appliedOffsets.get(element) ?? 0)
        return [element, clamp((viewportHeight / 2 - elementCenter) * speed, -100, 100)] as const
      })

      root.style.setProperty('--scroll-progress', progress.toFixed(5))
      offsets.forEach(([element, offset]) => {
        element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
        appliedOffsets.set(element, offset)
      })
    }

    function requestFrame() {
      if (activeMotion && !frame) frame = window.requestAnimationFrame(updateFrame)
    }

    function configureMotion() {
      observer?.disconnect()
      observer = undefined
      ambientObserver?.disconnect()
      ambientObserver = undefined
      intersectingAmbientScenes.clear()
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      root.classList.remove('motion-ready')
      resetParallax()
      activeMotion = motionEnabled && !prefersReducedMotion
      updateAmbientVisibility()

      if (!activeMotion) {
        root.style.setProperty('--scroll-progress', '0')
        revealElements.forEach((element) => element.classList.add('is-visible'))
        return
      }

      if ('IntersectionObserver' in window) {
        ambientObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement
            if (entry.isIntersecting) intersectingAmbientScenes.add(element)
            else intersectingAmbientScenes.delete(element)
          })
          updateAmbientVisibility()
        }, { threshold: 0 })
        ambientScenes.forEach((element) => ambientObserver?.observe(element))

        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const element = entry.target as HTMLElement
            element.classList.add('is-visible')
            revealed.add(element)
            observer?.unobserve(element)
          })
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

        revealElements.forEach((element) => {
          element.classList.toggle('is-visible', revealed.has(element))
          if (!revealed.has(element)) observer?.observe(element)
        })
        // CSS only hides unrevealed content after the observer is installed.
        root.classList.add('motion-ready')
      } else {
        revealElements.forEach((element) => element.classList.add('is-visible'))
      }

      requestFrame()
    }

    window.addEventListener('scroll', requestFrame, { passive: true })
    window.addEventListener('resize', requestFrame)
    document.addEventListener('visibilitychange', updateAmbientVisibility)
    configureMotion()

    return () => {
      activeMotion = false
      observer?.disconnect()
      ambientObserver?.disconnect()
      intersectingAmbientScenes.clear()
      updateAmbientVisibility()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestFrame)
      window.removeEventListener('resize', requestFrame)
      document.removeEventListener('visibilitychange', updateAmbientVisibility)
      root.classList.toggle('motion-ready', wasMotionReady)
      if (previousProgress) root.style.setProperty('--scroll-progress', previousProgress)
      else root.style.removeProperty('--scroll-progress')

      revealElements.forEach((element) => element.classList.toggle('is-visible', originallyVisible.has(element)))
      parallaxElements.forEach((element) => {
        const previous = previousParallax.get(element)
        if (previous) element.style.setProperty('--parallax-y', previous)
        else element.style.removeProperty('--parallax-y')
      })
    }
  }, [motionEnabled, prefersReducedMotion])

  return { prefersReducedMotion }
}
