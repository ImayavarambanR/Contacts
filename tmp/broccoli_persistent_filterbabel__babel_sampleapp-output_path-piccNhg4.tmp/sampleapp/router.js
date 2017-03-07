define('sampleapp/router', ['exports', 'ember', 'sampleapp/config/environment'], function (exports, _ember, _sampleappConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sampleappConfigEnvironment['default'].locationType,
    rootURL: _sampleappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('contacts', function () {
      this.route('create');
      this.route('disp', { path: '/:contact_id' });
    });
    this.route('reminders', function () {
      this.route('create');
      this.route('disp', { path: '/:reminder_id' });
    });
    this.route('about');

    this.route('reminder-list');
  });

  exports['default'] = Router;
});