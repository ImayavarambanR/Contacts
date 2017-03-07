define('sampleapp/tests/routes/contacts/disp.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contacts/disp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/disp.js should pass jshint.');
  });
});