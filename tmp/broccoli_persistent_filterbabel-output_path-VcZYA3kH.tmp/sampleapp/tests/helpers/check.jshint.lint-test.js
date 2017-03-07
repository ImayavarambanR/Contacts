define('sampleapp/tests/helpers/check.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/check.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/check.js should pass jshint.\nhelpers/check.js: line 6, col 13, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});