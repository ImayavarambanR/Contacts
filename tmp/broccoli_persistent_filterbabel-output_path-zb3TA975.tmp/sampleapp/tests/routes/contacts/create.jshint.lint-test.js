define('sampleapp/tests/routes/contacts/create.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contacts/create.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contacts/create.js should pass jshint.\nroutes/contacts/create.js: line 5, col 11, \'result\' is not defined.\n\n1 error');
  });
});