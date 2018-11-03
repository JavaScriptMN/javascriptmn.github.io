import React from 'react'
import { Link, withPrefix } from 'gatsby'

const Footer = () => (
  <div style={{ maxWidth: '100vw' }} className="footer">
    <div className="footer-content">
      <div className="footer-column footer-sitemap">
        <h6>Meetup</h6>
        <Link to={withPrefix('/')}>Home</Link>
        <Link to={withPrefix('/our-sponsors/')}>Current Sponsors</Link>
        <Link to={withPrefix('/code-of-conduct/')}>Code of Conduct</Link>
        <Link className="highlight" to={withPrefix('/speak/')}>
          Speak
        </Link>
      </div>
      <div className="footer-column footer-social-sharing">
        <h6>Connect</h6>
        <div className="social">
          <a href="https://twitter.com/JavaScriptMN/">Twitter</a>
        </div>
        <div className="social">
          <a href="https://www.meetup.com/JavaScriptMN/events/">Calendar</a>
        </div>
      </div>
    </div>
  </div>
)

Footer.propTypes = {}

export default Footer
