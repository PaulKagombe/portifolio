import RevealItem from './RevealItem'

export default function Hero() {
  return (
    <section className="hero">
      <RevealItem as="p" className="eyebrow">
        Portfolio — Vol. 01 — Nairobi, KE
      </RevealItem>

      <RevealItem as="h1" className="hero__title">
        Paul <em>Nabu</em>
      </RevealItem>

      <RevealItem as="p" className="hero__role">
        Graphic Designer
      </RevealItem>

      <RevealItem as="p" className="hero__sub">
        I build brand systems that hold together — from a single mark to a full shelf of
        packaging — with a sharp eye for colour, type, and how a design reads at any size.
      </RevealItem>

      <RevealItem as="div" className="hero__meta">
        <span>Brand Identity</span>
        <span>·</span>
        <span>Packaging</span>
        <span>·</span>
        <span>Social &amp; Campaign Design</span>
      </RevealItem>

      <RevealItem as="a" className="hero__cue" href="#work">
        Selected work{' '}
        <span className="hero__cue-arrow" aria-hidden="true">
          ↓
        </span>
      </RevealItem>
    </section>
  )
}
