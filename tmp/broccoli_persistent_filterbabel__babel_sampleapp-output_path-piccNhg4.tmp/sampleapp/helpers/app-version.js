define('sampleapp/helpers/app-version', ['exports', 'ember', 'sampleapp/config/environment'], function (exports, _ember, _sampleappConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _sampleappConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});