import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref. When the element
 * scrolls into view, adds the `is-visible` class (which App.css's `.reveal`
 * rules transition on) and stops observing.
 *
 * Usage: give the element `className="reveal ..."` and `ref={ref}`.
 */
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If the browser doesn't support IntersectionObserver, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
