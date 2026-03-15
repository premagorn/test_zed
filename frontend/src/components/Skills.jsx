import '../styles/Section.css'

function Skills({ skills }) {
  return (
    <section>
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div className="skill-group" key={category}>
          <div className="skill-category">{category}</div>
          <div className="skills-container">
            {items.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
