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
          base={[{ "href" : "/" }]}
        />
        <Meetup
          location="Olson"
          date="Wed Jan 25 2017 6:30PM CST"
          title="January Meetup"
          url="https://meetup.com/javascriptmn"
        />
      </div>
    )
  }
}
