import React from 'react'
import Meetup from '../components/Meetup'

class index extends React.Component {
  openURL (url) {
    window.open(url)
  }

  render () {
    return (<div className='Index'>
      <div className='hero-container'>

        <div className='hero-container-content'>

          <div className='primary-header'>JavaScript MN</div>
          <div className='secondary-header'>A monthly meetup for anyone interested in JavaScript and related technologies in the Twin Cities.</div>

	  <Meetup />

          <div className='button-row'>
            <button className='outline-button' onClick={_ => this.openURL("https://meetup.com/javascriptmn")}>
              <span className='icon rsvp'></span>
              <span>RSVP</span>
            </button>
            <button className='outline-button' onClick={_ => this.openURL("https://javascriptmn-slack.herokuapp.com")}>
              <span className='icon slack'></span>
              <span>Join our Slack</span>
            </button>
            <button className='outline-button' onClick={_ => this.openURL("https://www.youtube.com/channel/UC4DA_d8mD-14ZSBvIb1jmXg")}>
              <span className='icon youtube'></span>
              <span>Watch previous talks</span>
            </button>
          </div>


          <div className='sponsor-container'>

            <div className='sponsored-by-title'>Hosted By:</div>

            <div className='sponsor-container-row'>
              <div className='sponsor'>
                <img src={'images/sponsors/logo-icf-olson.svg'} />
              </div>
            </div>

          </div>

        </div>

      </div>

      <div id='#location' className='secondary-content tilt-left'>
        <div className='column'>
          <h2 className='secondary-content-header'>Location</h2>
          <div className='secondary-content-blurb'>We are graciously hosted at <strong>Olson's</strong> office space in downtown Minneapolis. Parking is available in the adjacent lot or additional street parking near the building.</div>
          <address>
            Olson<br />
            420 N 5th St<br />
            Suite #1000<br />
            Minneapolis, MN 55401
          </address>

        </div>
        <div className='column'>
          <div className='map-container'>
          </div>
        </div>

      </div>

      <div className='secondary-content tilt-right'>
        <div className='column'>
          <img width={650} src={'images/speak.jpeg'} />
        </div>
        <div className='column info-column'>
          <h2 className='secondary-content-header'>Speaking</h2>
          <div className='secondary-content-blurb'>
            <strong>Interested in speaking?</strong><br/>
            We are always open to new speakers, please see our questionnaire for more details.
          </div>
          <a className='outline-button small-button' href={'/speak/'}>Learn More</a>
        </div>
      </div>
  </div>)
  }
}

export default index
