import { useReveal } from "../hooks/UseReveal";

/**
 * Wraps a child element with the `.reveal` class and an IntersectionObserver
 * ref, so it fades/slides in per the `.reveal` / `.is-visible` rules in
 * App.css. Pass `as` to control the rendered tag (defaults to "div").
 */
export default function RevealItem({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
