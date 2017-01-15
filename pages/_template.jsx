import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
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
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <img src="/javascriptmn.png" />
              {config.siteTitle}
            </Link>
          </Container>
          <Container>
            <Link
              to={prefixLink('/about/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              ABOUT
            </Link>
            <Link> | </Link>
            <Link
              to={prefixLink('/code-of-conduct/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              CODE OF CONDUCT
            </Link>
            <Link> | </Link>
            <Link
              to={prefixLink('/sponsor/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              SPONSOR
            </Link>
            <Link> | </Link>
            <Link
              to={prefixLink('/speak/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              SPEAK
            </Link>
            <Link> | </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
