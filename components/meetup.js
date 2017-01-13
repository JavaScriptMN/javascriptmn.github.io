import React from 'react'

export default class meetup extends React.Component {
  render () {
    const meetupStyles = {
        container: {
          textAlign: 'center',
          border: '1px solid black',
          display: 'inline block',
          margin: '8rem'
        },
        title: {
          fontSize: '2rem',
          margin: '1rem'
        },
        bug: {},
        rsvpButton: {}
    }

    return (
      <div style={ meetupStyles.container }>
        <strong style={ meetupStyles.title }><p>{ this.props.title }</p></strong>
        <p style={ meetupStyles.bug }>{ this.props.date } | { this.props.location }</p>
        <a style={ meetupStyles.rsvpButton } target='_blank' href={ this.props.url }><p>RSVP</p></a>
      </div>
    )
  }
}
