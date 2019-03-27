import React from 'react'
import { Link, withPrefix } from 'gatsby'
import Meetup from '../components/Meetup'

import speakImg from '../images/speak.jpeg'
import logoWeWork from '../images/sponsors/logo-wework.svg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="hero-container">
      <div className="hero-container-content">
        <div className="primary-header">JavaScript MN</div>
        <div className="secondary-header">
          A monthly meetup for anyone interested in JavaScript and related
          technologies in the Twin Cities.
        </div>

        <Meetup />

        <div className="button-row">
          <a className="outline-button" href="https://meetup.com/javascriptmn">
            <span className="icon rsvp" />
            <span>RSVP</span>
          </a>
          <a
            className="outline-button"
            href="https://javascriptmn-slack.herokuapp.com"
          >
            <span className="icon slack" />
            <span>Join our Slack</span>
          </a>
          <a
            className="outline-button"
            href="https://www.youtube.com/channel/UC4DA_d8mD-14ZSBvIb1jmXg"
          >
            <span className="icon youtube" />
            <span>Watch previous talks</span>
          </a>
        </div>

        <div className="sponsor-container">
          <div className="sponsored-by-title">Hosted By:</div>
          <div className="sponsor-container-row">
            <a
              className="sponsor"
              href="https://www.wework.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoWeWork} alt="WeWork logo" title="WeWork" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="#location" className="secondary-content tilt-left">
      <div className="column">
        <h2 className="secondary-content-header">Location</h2>
        <div className="secondary-content-blurb">
          We are graciously hosted at <strong>WeWork's</strong> Uptown
          Minneapolis Coworking Space. Parking is available on-street (paid at
          meters, free on residential streets) and in the adjacent MoZaic Art
          Park Ramp (paid). Public transportation access to the 6, 12, 17, 21,
          23, 53, and 612 bus routes is just a minute away.
        </div>
        <address>
          WeWork
          <br />
          1330 Lagoon Ave
          <br />
          Minneapolis, MN 55408
        </address>
      </div>
      <div className="column">
        <div className="map-container" />
      </div>
    </div>

    <div className="secondary-content tilt-right">
      <div className="column">
        <img
          width={650}
          src={speakImg}
          alt="A panorama of a JavaScriptMN event"
        />
      </div>
      <div className="column info-column">
        <h2 className="secondary-content-header">Speaking</h2>
        <div className="secondary-content-blurb">
          <strong>Interested in speaking?</strong>
          <br />
          We are always open to new speakers, please see our questionnaire for
          more details.
        </div>
        <Link
          className="outline-button small-button"
          to={withPrefix('/speak/')}
        >
          Learn More
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
