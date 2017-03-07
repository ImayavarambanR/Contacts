define('sampleapp/tests/helpers/resolver', ['exports', 'sampleapp/resolver', 'sampleapp/config/environment'], function (exports, _sampleappResolver, _sampleappConfigEnvironment) {

  var resolver = _sampleappResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _sampleappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sampleappConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});