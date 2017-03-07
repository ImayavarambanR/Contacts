define('sampleapp/tests/mirage/mirage/models/contact.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/contact.js should pass jshint.');
  });
});