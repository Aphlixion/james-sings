document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = 'Booking inquiry: ' + f.service.value;
      var body =
        'Name: ' + f.name.value.trim() + '\n' +
        'Email: ' + f.email.value.trim() + '\n' +
        'Phone: ' + (f.phone.value.trim() || 'Not provided') + '\n' +
        'Service: ' + f.service.value + '\n' +
        'Event date: ' + (f.date.value || 'Not set yet') + '\n' +
        'Location: ' + (f.location.value.trim() || 'Not provided') + '\n\n' +
        'Rehearsal, attire, theme, other details:\n' + f.message.value.trim();
      window.location.href = 'mailto:jamessings46@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
});
