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
    title: 'April Event: Show and Tell',
    date: new Date('2022-04-27T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsydcgbkc/',
    location: 'Virtual',
  },
  {
    title: 'March Event: Show and Tell',
    date: new Date('2022-03-30T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsydcfbnc/',
    location: 'Virtual',
  },
  {
    title: 'February Event: Show and Tell',
    date: new Date('2022-02-23T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsydcdbfc/',
    location: 'Virtual',
  },
  {
    title: 'January Event: Show and Tell',
    date: new Date('2022-01-26T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsydccbjc/',
    location: 'Virtual',
  },
  {
    title: 'November/December Event: Overview of Firebase in Vue - Craig Fisk',
    date: new Date('2021-12-15T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccpbgc/',
    location: 'Virtual',
  },
  {
    title: 'October Event: Show and Tell',
    date: new Date('2021-10-27T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccnbkc/',
    location: 'Virtual',
  },
  {
    title: 'September Event: Show and Tell',
    date: new Date('2021-09-29T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccmbmc/',
    location: 'Virtual',
  },
  {
    title: 'August Event: Show and Tell',
    date: new Date('2021-08-25T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsycclbhc/',
    location: 'Virtual',
  },
  {
    title: 'July Event: Show and Tell',
    date: new Date('2021-07-28T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsycckblc/',
    location: 'Virtual',
  },
  {
    title: 'June Event: Show and Tell',
    date: new Date('2021-06-30T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccjbnc/',
    location: 'Virtual',
  },
  {
    title: 'May Event: Show and Tell',
    date: new Date('2021-05-26T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsycchbjc/',
    location: 'Virtual',
  },
  {
    title: 'April Event: Show and Tell',
    date: new Date('2021-04-28T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccgblc/',
    location: 'Virtual',
  },
  {
    title: 'March Event: Show and Tell',
    date: new Date('2021-03-31T18:00-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/qltnfsyccfbpc/',
    location: 'Virtual',
  },
  {
    title: 'February Event: Show and Tell',
    date: new Date('2021-02-24T18:00-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/hmzgxryccdbgc/',
    location: 'Virtual',
  },
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
