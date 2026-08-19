import { useMobileNav } from './hooks/useMobileNav'
import Header from './components/Header'
import Hero from './components/Hero'
import RegistrationBar from './components/RegistrationBar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const { open, toggle, close } = useMobileNav()

  return (
    <div className="page">
      <Header open={open} onToggle={toggle} onLinkClick={close} />
      <main id="top">
        <Hero />
        <RegistrationBar />
        <About />
        <RegistrationBar />
        <Work />
      </main>
      <Contact />
    </div>
  )
}
