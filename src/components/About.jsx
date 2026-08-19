import { SWATCHES, SKILLS } from '../data/portfolio'
import RevealItem from './RevealItem'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <p className="section-label">Profile / 01</p>
        <h2>
          I design so a brand still <em>looks like itself</em> on the tenth touchpoint, not
          just the first.
        </h2>
        <p>
          I'm Paul — a graphic designer working across brand identity, packaging and social
          design. Recent work spans a creative agency's full campaign system, a platform
          logomark built around a single clear idea, and a complete packaging system for a
          skincare line, dieline to shelf. I care about the unglamorous part of the job: a
          palette that still works in five contexts, type that scales, a mark that survives
          being small.
        </p>
      </div>

      <div className="about__specs">
        <RevealItem as="div" className="spec-block">
          <p className="spec-block__label">Palette</p>
          <div className="palette-strip">
            {SWATCHES.map((s) => (
              <div className="palette-chip" key={s.hex}>
                <span style={{ background: s.hex }} />
                <b>{s.name}</b>
                <code>{s.hex}</code>
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem as="div" className="spec-block">
          <p className="spec-block__label">Type</p>
          <div className="type-specimen">
            <div>
              <span
                className="type-specimen__aa"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                Aa
              </span>
              <p>
                Fraunces
                <br />
                <small>display serif</small>
              </p>
            </div>
            <div>
              <span className="type-specimen__aa" style={{ fontFamily: 'var(--font-body)' }}>
                Aa
              </span>
              <p>
                Space Grotesk
                <br />
                <small>clean &amp; modern</small>
              </p>
            </div>
          </div>
        </RevealItem>

        <RevealItem as="div" className="spec-block">
          <p className="spec-block__label">Tools &amp; Skills</p>
          <ul className="tag-list">
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </RevealItem>
      </div>
    </section>
  )
}
