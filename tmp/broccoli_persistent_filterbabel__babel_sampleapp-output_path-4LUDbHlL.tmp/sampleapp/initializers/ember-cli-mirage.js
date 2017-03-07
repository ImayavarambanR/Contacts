define('sampleapp/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'sampleapp/config/environment', 'sampleapp/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _sampleappConfigEnvironment, _sampleappMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_sampleappConfigEnvironment['default'].environment, _sampleappConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_sampleappConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _sampleappConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _sampleappMirageConfig['default'], testConfig: _sampleappMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});