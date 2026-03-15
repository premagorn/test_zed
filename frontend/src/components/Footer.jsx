import '../styles/Section.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      Last updated · {year}
    </div>
  )
}

export default Footer
