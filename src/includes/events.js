(function () {
  const pastEvents = document.querySelectorAll('[data-past-event]');

  for (const event of pastEvents) {
    const time = new Date(
      event.querySelector('time[datetime]').getAttribute('datetime'),
    );
    // consider 9 PM the end of the day
    time.setHours(20, 59, 59, 999);
    // remove future events
    if (Date.now() < time.getTime()) {
      event.remove();
    }
  }
})();
