export default function SpecRow({ project }) {
  return (
    <dl className="spec-row">
      <div>
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Tools</dt>
        <dd>{project.tools}</dd>
      </div>
      <div>
        <dt>Deliverables</dt>
        <dd>{project.deliverables}</dd>
      </div>
    </dl>
  )
}
