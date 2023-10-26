(function () {
  const upcoming = document.getElementById('upcoming-event');
  const fallback = document.getElementById('upcoming-event-fallback');

  const upcomingDate = new Date(
    upcoming.querySelector('time[datetime]').getAttribute('datetime'),
  );
  // show the event time until the end of the day it's scheduled for
  upcomingDate.setHours(23, 59, 59, 999);
  if (Date.now() > upcomingDate.getTime()) {
    upcoming.classList.add('hidden');
    fallback.classList.remove('hidden');
  }
})();
