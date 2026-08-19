import RegistrationBar from './RegistrationBar'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <RegistrationBar onDark />
      <div className="contact__body">
        <p className="section-label section-label--dark">Contact / 03</p>
        <h2>
          Have a brand that needs a system? <em>Let's talk.</em>
        </h2>
        <a className="contact__email" href="mailto:paulnabu4@gmail.com">
          paulnabu4@gmail.com
          <span className="contact__email-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <p className="contact__location">Nairobi, Kenya</p>
      </div>
      <div className="colophon">
        <span>Set in Fraunces &amp; Space Grotesk</span>
        <span>Built with React</span>
        <span>© {new Date().getFullYear()} Paul Nabu</span>
      </div>
    </footer>
  )
}
