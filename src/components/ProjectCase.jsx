import SpecRow from './SpecRow'

export default function ProjectCase({ project }) {
  return (
    <article className="case" id={project.name.toLowerCase()}>
      <header className="case__header">
        <span className="case__index">{project.index}</span>
        <h3 className="case__name">{project.name}</h3>
      </header>
      <SpecRow project={project} />
      <p className="case__description">{project.description}</p>
      <figure className="case__frame">
        <span className="crop crop--tl" aria-hidden="true" />
        <span className="crop crop--tr" aria-hidden="true" />
        <span className="crop crop--bl" aria-hidden="true" />
        <span className="crop crop--br" aria-hidden="true" />
        {/* img-clip wraps the image so the hover zoom (transform: scale)
            clips at the frame edge instead of spilling over it */}
        <span className="img-clip">
          <img src={project.img} alt={project.alt} loading="lazy" />
        </span>
        <figcaption>{project.caption}</figcaption>
      </figure>
    </article>
  )
}
