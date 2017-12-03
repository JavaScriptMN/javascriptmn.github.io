import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Html extends React.Component {
  render () {
    const page = this.props.route.page.data
    return (
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    )
  }
}
