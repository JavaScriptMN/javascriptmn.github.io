import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="site-wrapper">
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Header />
        <min role="main" className="content-body">
          {children}
        </min>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
