import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Meetup from '../components/meetup'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          NEXT MEETUP:
        </h1>
        <Meetup
          location="Olson"
          date="TODAY"
          title="January Meetup"
          url="https://meetup.com/javascriptmn"
        />
      </div>
    )
  }
}
