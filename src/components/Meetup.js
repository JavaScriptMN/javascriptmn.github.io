import React, { Component } from 'react'
import format from 'date-fns/format'
import 'whatwg-fetch'
import config from '../../config.json'

const NEXT_MEETUP_URI = config.apiRoot

const MeetupDescription = ({ name, time, venue }) => (
  <div className="next-event">
    <div className="next-event-tagline">
      <strong>Next Event:</strong>
      <div className="event-name">{name}</div>
      {time &&
        venue &&
        venue.name && (
          <span className="next-event-timestamp">
            {format(new Date(time), 'dddd, MMMM Do, YYYY')} at{' '}
            <strong>{venue.name}</strong>
          </span>
        )}
    </div>
  </div>
)

class Meetup extends Component {
  state = {
    name: '',
    time: Date.now(),
    venue: { name: '' },
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: false,
    })
    window
      .fetch(NEXT_MEETUP_URI)
      .then(res => res.json())
      .then(({ name, time, venue }) =>
        this.setState({
          name,
          time,
          venue,
          loading: false,
          error: false,
        })
      )
      .catch(() => this.setState({ loading: false, error: true }))
  }

  render() {
    // const meetupStyles = {
    //   container: {
    //     textAlign: 'center',
    //     border: '1px solid black',
    //     display: 'inline block',
    //     margin: '8rem',
    //   },
    //   title: {
    //     fontSize: '2rem',
    //     margin: '1rem',
    //   },
    // }

    if (this.state.loading) return <MeetupDescription name={'Loading...'} />

    if (this.state.error)
      return (
        <MeetupDescription
          name={
            <a href="https://meetup.com/javascriptmn">
              Check Meetup.com for updates
            </a>
          }
        />
      )

    return (
      <MeetupDescription
        name={this.state.name}
        time={this.state.time}
        venue={this.state.venue}
      />
    )
  }
}

export default Meetup
