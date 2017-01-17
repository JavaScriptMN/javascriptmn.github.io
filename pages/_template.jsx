import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/main.scss'
import { config } from 'config'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="site-wrapper">
        <Headroom style={{background: '#fff'}}>
          <Container className="primary-navigation" >
            <Link to={prefixLink('/')} >
              <img className="logo" src="images/javascriptmn.png" />
            </Link>
            <Link to={prefixLink('/about/')} >
              About
            </Link>
            <Link to={prefixLink('/code-of-conduct/')} >
              Code of Conduct
            </Link>
            <Link to={prefixLink('/our_sponsors/')} >
              Current Sponsors
            </Link>
            <Link className="highlight" to={prefixLink('/speak/')} >
              Speak
            </Link>
          </Container>
        </Headroom>

        <Container className="content-body" style={{ maxWidth: '100vw' }} >
          {this.props.children}
        </Container>

        <Container style={{ maxWidth: '100vw' }} className="footer">
          <div className="footer-sitemap">
            <Link to={prefixLink('/about/')} >
              About
            </Link>
            <Link to={prefixLink('/code-of-conduct/')} >
              Code of Conduct
            </Link>
            <Link to={prefixLink('/our_sponsors/')} >
              Current Sponsors
            </Link>
            <Link className="highlight" to={prefixLink('/speak/')} >
              Speak
            </Link>
          </div>
        </Container>
      </div>
    )
  },
})
