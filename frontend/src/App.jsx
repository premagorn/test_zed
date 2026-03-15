import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  const [cvData, setCvData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/cv')
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setCvData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading CV...</div>
  if (error)   return <div className="error">⚠️ {error}</div>

  return (
    <div className="container">
      <Header data={cvData} />
      <div className="body">
        <About       about={cvData.about}               />
        <Experience  experiences={cvData.experiences}   />
        <Education   education={cvData.education}       />
        <Projects    projects={cvData.projects}         />
        <Skills      skills={cvData.skills}             />
        <Languages   languages={cvData.languages}       />
      </div>
      <Footer />
    </div>
  )
}

export default App
