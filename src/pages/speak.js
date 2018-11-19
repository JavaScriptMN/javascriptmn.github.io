import React from 'react'
import Layout from '../components/layout'

const Speak = () => (
  <Layout>
    <div className="interior-page tilt-left">
      <h1 className="secondary-content-header">Speak at JSMN</h1>
      <p>
        If you have something you think would be great for the group, consider
        the opportunity to beef up your public speaking skills and hone your
        understanding of the tech topic at hand by giving a talk at an upcoming
        meetup. Get in front of the biggest tech meetup in the state to be seen
        and heard by fellow coders, coworkers, recruiters, and grow your
        presence in the Twin Cities tech community.
      </p>

      <a className="outline-button" href="mailto:javascript.mn@gmail.com">
        <span>Email us about your idea!</span>
      </a>
    </div>

    <div className="interior-page tilt-left">
      <h1 className="secondary-content-header">Speaker Questionnaire</h1>

      <p>
        We ask that those speaking at our meetup prepare answers to the
        following questions so that we may better prepare our members for their
        presentation.
      </p>

      <ol>
        <li>What is the title for your presentation?</li>
        <li>What is a brief description of your talk?</li>
        <li>How will this improve how people work with JavaScript?</li>
        <li>
          What is one thing people should know beforehand to better understand
          this talk?
        </li>
        <li>
          What are pre-meetup resources that individuals should check out?
        </li>
        <li>
          What information about you would you like to share (bio, links,
          contact info?)
        </li>
      </ol>
    </div>
  </Layout>
)

export default Speak
