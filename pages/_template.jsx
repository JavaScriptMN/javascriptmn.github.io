import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/mixins.scss'
import '../css/main.scss'
import { config } from 'config'

import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  render () {
    return (
      <div className="site-wrapper">
        <Headroom style={{background: '#fff'}}>
          <Container className="primary-navigation" >
            <div className="logo-container">
              <Link to={prefixLink('/')} >
                <img className="logo" src="/images/javascriptmn.png" />
              </Link>
            </div>
            <div className="secondary-nav">
              <Link to={prefixLink('/our-sponsors/')} >
                Current Sponsors
              </Link>
              <Link to={prefixLink('/code-of-conduct/')} >
                Code of Conduct
              </Link>
              <Link className="highlight" to={prefixLink('/speak/')} >
                Speak
              </Link>
            </div>
          </Container>
        </Headroom>

        <Container className="content-body" style={{ maxWidth: '100vw' }} >
          {this.props.children}
        </Container>

        <Container style={{ maxWidth: '100vw' }} className="footer">
          <div className="footer-content">
            <div className="footer-column footer-sitemap">
              <h6>Meetup</h6>
              <Link to={prefixLink('/')} >
                Home
              </Link>
              <Link to={prefixLink('/our-sponsors/')} >
                Current Sponsors
              </Link>
              <Link to={prefixLink('/code-of-conduct/')} >
                Code of Conduct
              </Link>
              <Link className="highlight" to={prefixLink('/speak/')} >
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
        </Container>
      </div>
    )
  }
}
