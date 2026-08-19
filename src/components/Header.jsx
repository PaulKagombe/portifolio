import { NAV_LINKS } from '../data/portfolio'

export default function Header({ open, onToggle, onLinkClick }) {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="wordmark">
          Paul Nabu
        </a>
        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {NAV_LINKS.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={onToggle}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open && (
        <nav id="mobile-nav" className="site-nav--mobile" aria-label="Primary">
          {NAV_LINKS.map((n) => (
            <a key={n.href} href={n.href} onClick={onLinkClick}>
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}
