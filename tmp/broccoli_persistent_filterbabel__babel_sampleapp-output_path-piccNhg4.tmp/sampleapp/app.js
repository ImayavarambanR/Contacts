define('sampleapp/app', ['exports', 'ember', 'sampleapp/resolver', 'ember-load-initializers', 'sampleapp/config/environment'], function (exports, _ember, _sampleappResolver, _emberLoadInitializers, _sampleappConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sampleappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sampleappConfigEnvironment['default'].podModulePrefix,
    Resolver: _sampleappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sampleappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});