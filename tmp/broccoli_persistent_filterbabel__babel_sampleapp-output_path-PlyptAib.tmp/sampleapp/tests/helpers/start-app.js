define('sampleapp/tests/helpers/start-app', ['exports', 'ember', 'sampleapp/app', 'sampleapp/config/environment'], function (exports, _ember, _sampleappApp, _sampleappConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _sampleappConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _sampleappApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});