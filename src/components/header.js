import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Headroom from 'react-headroom'

import jsmnImg from '../images/JSMN-opaque-js.png'

const Header = () => (
  <Headroom style={{ background: '#fff' }}>
    <nav className="primary-navigation">
      <div className="logo-container">
        <Link to={withPrefix('/')}>
          <img className="logo" src={jsmnImg} alt="Logo for JavaScriptMN" />
        </Link>
      </div>
      <div className="secondary-nav">
        <Link to={withPrefix('/our-sponsors/')}>Current Sponsors</Link>
        <Link to={withPrefix('/code-of-conduct/')}>Code of Conduct</Link>
        <Link className="highlight" to={withPrefix('/speak/')}>
          Speak
        </Link>
      </div>
    </nav>
  </Headroom>
)

export default Header
