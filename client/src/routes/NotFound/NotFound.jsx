import React from 'react'
import {Link} from "react-router-dom"
import "./notfound.scss"

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Sorry, the page you're looking for does not exist</h2>
        <div className="notfound-cta">Click <Link to="/" className="notfound-cta-link">here</Link> to go back to home page</div>
      </div>
    </section>
  )
}

export default NotFound