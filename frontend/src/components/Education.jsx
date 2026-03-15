import '../styles/Section.css'

function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, i) => (
        <div className="item" key={i}>
          <div className="item-header">
            <div>
              <div className="item-title">{edu.degree}</div>
              <div className="item-subtitle">{edu.university}</div>
              {edu.detail && <div className="item-detail">{edu.detail}</div>}
            </div>
            <span className="item-date">{edu.year}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education
