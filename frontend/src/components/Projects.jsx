import '../styles/Section.css'

function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="proj-item" key={i}>
            <div className="proj-header">
              <span className="item-title">{proj.name}</span>
              <span className="proj-tech">{proj.tech}</span>
            </div>
            <p className="item-desc">{proj.description}</p>
            {proj.url && (
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                → View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
