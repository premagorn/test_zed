import '../styles/Section.css'

function Experience({ experiences }) {
  return (
    <section>
      <h2>Experience</h2>
      {experiences.map((exp, i) => (
        <div className="item" key={i}>
          <div className="item-header">
            <div>
              <div className="item-title">{exp.role}</div>
              <div className="item-subtitle">{exp.company}</div>
            </div>
            <span className="item-date">{exp.duration}</span>
          </div>
          <p className="item-desc">{exp.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience
