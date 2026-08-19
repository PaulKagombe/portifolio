import { SWATCHES } from '../data/portfolio'

export default function RegistrationBar({ onDark = false }) {
  return (
    <div className={`reg-bar${onDark ? ' reg-bar--dark' : ''}`} aria-hidden="true">
      <span className="reg-mark">＋</span>
      <div className="reg-swatches">
        {SWATCHES.map((s) => (
          <div className="reg-swatch" key={s.hex}>
            <span className="reg-swatch__chip" style={{ background: s.hex }} />
            <span className="reg-swatch__label">
              {s.name} <b>{s.hex}</b>
            </span>
          </div>
        ))}
      </div>
      <span className="reg-mark">＋</span>
    </div>
  )
}
