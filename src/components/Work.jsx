import ProjectCase from './ProjectCase'
import RevealItem from './RevealItem'
import { PROJECTS } from '../data/Projects'

export default function Work() {
  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work / 02</p>
      <h2 className="work__heading">Three brands, three problems, three systems.</h2>
      <div className="case-list">
        {PROJECTS.map((p) => (
          <RevealItem as="div" key={p.name}>
            <ProjectCase project={p} />
          </RevealItem>
        ))}
      </div>
    </section>
  )
}
