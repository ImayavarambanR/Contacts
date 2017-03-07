define('sampleapp/helpers/check', ['exports', 'ember'], function (exports, _ember) {
  exports.check = check;

  function check(params /*, hash*/) {
    var a = params[0];
    var b = params[1];
    return a == b;
  }

  exports['default'] = _ember['default'].Helper.helper(check);
});