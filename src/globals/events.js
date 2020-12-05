/**
 * @typedef JSMNEvent
 * @type {object}
 * @property {string} title - event title.
 * @property {Date} date - event date, be sure to include timezone info.
 * @property {string} link - link to meetup/event page.
 * @property {string} location - location of event.
 * @property {boolean} [hidden] - hide it from the site if true.
 */

/**
 * @type {JSMNEvent[]}
 */
module.exports = [
  {
    title: 'End of the Year Event: Pizza Night',
    date: new Date('2020-12-09T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/hmzgxrybcpbhc/',
    location: 'Virtual',
  },
  {
    title: 'October Event: Shalanah Dawson, Ryan Rampersad, Brian Mitchell',
    date: new Date('2020-10-28T18:30-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/hmzgxrybcnblc/',
    location: 'Virtual',
  },
  {
    title: 'September Event: Show and Tell',
    date: new Date('2020-09-30T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/hmzgxrybcmbnc/',
    location: 'Virtual',
  },
  {
    title:
      'August Event: Code Championship and Recursion in the Wild – Luke Schlangen',
    date: new Date('2020-08-26T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/jtgdmrybclbjc/',
    location: 'Virtual',
  },
  {
    title: 'July Event: Virtual Show-and-Tell',
    date: new Date('2020-07-29T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/jtgdmrybckbmc/',
    location: 'Virtual',
  },
  {
    title: 'February Event: JS Frameworks and Low Code Tools w/ Tim Murphy',
    date: new Date('2020-02-26T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/jtgdmrybcdbjc/',
    location: 'WeWork Uptown',
  },
  {
    title: 'January Event: Short Talks',
    date: new Date('2020-01-29T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/jtgdmrybccbmc/',
    location: 'WeWork Uptown',
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());
