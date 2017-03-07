define('sampleapp/tests/routes/contacts/create.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contacts/create.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/create.js should pass jshint.');
  });
});