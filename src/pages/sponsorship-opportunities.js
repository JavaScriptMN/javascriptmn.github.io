import React from 'react'
import Layout from '../components/layout'

const SponsorshipOpportunities = () => (
  <Layout>
    <div className="interior-page tilt-left">
      <h1 className="secondary-content-header">Sponsorship Opportunities</h1>

      <h3>$2,500 Level</h3>

      <ul>
        <li>Website: Link & Logo on front page (and sponsor page)</li>
        <li>
          Meetups: Stand alone slide with thanks and description of services by
          host at the start of the meetup & website link on Meetup.com
        </li>
        <li>
          YouTube: 15 Second Video Intro with stand alone slide (including link
          in description)
        </li>
      </ul>

      <h3>$1,000 Level</h3>

      <ul>
        <li>Website: Prominent link & logo on sponsor page</li>
        <li>
          Meetups: Announcement of thanks by host with joint slide representing
          other sponsors from this category
        </li>
        <li>
          YouTube: Joint slide in video pre-roll with others from this category
          and link to website in the description
        </li>
      </ul>

      <h3>$250 Level</h3>

      <ul>
        <li>Website: Link & Logo on Sponsor page</li>
        <li>YouTube: End of video slide with others in this category</li>
        <li>Meetups: Joint slide with other sponsors at this level</li>
      </ul>

      <h3>Schwag Sponsor</h3>
      <p>
        Sponsors provide us with merchandise (t-shirts, software, memberships,
        ect...) to give out at our events.
      </p>

      <ul>
        <li>Website: Link</li>
        <li>Meetups: Joint slide with other sponsors at this level</li>
        <li>
          Their branded merchandise will be handed out at our to those who
          attend and participate at our meetups
        </li>
      </ul>
    </div>
  </Layout>
)

export default SponsorshipOpportunities
