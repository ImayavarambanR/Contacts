define('sampleapp/tests/unit/helpers/check-test', ['exports', 'sampleapp/helpers/check', 'qunit'], function (exports, _sampleappHelpersCheck, _qunit) {

  (0, _qunit.module)('Unit | Helper | check');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _sampleappHelpersCheck.check)([42]);
    assert.ok(result);
  });
});