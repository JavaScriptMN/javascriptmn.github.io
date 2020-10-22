module.exports = [
  {
    title: 'November Meetup',
    date: new Date('2020-11-25T18:30-06:00'),
    link: 'https://www.meetup.com/JavaScriptMN/',
    location: 'Virtual',
    hidden: true,
  },
  {
    title: 'October Event: Shalanah Dawson, Ryan Rampersad, Brian Mitchell',
    date: new Date('2020-10-28T18:30-05:00'),
    link: 'https://www.meetup.com/JavaScriptMN/events/hmzgxrybcnblc/',
    location: 'Virtual',
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());
