import '../styles/Section.css'

function Languages({ languages }) {
  return (
    <section>
      <h2>Languages</h2>
      <div className="lang-list">
        {languages.map((item, i) => (
          <div className="lang-item" key={i}>
            <span className="lang-name">{item.lang}</span>
            <span className="lang-level">{item.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages
