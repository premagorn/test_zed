import '../styles/Section.css'

function About({ about }) {
  return (
    <section>
      <h2>About Me</h2>
      <p className="about-text">{about}</p>
    </section>
  )
}

export default About
