define('sampleapp/tests/mirage/mirage/config.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/config.js should pass jshint.\nmirage/config.js: line 1, col 8, \'Mirage\' is defined but never used.\n\n1 error');
  });
});