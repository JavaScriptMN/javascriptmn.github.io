(function () {
  const pastEvents = document.querySelectorAll('[data-past-event]');

  for (const event of pastEvents) {
    const time = new Date(
      event.querySelector('time[datetime]').getAttribute('datetime')
    );
    // hide the event until the end of the day it's scheduled for
    time.setHours(23, 59, 59, 999);
    if (Date.now() < time.getTime()) {
      // TIL this is a thing, wow!
      event.outerHTML = '';
    }
  }
})();
