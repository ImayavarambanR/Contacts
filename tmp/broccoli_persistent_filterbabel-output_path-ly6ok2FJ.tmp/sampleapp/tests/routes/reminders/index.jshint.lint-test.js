define('sampleapp/tests/routes/reminders/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reminders/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/reminders/index.js should pass jshint.\nroutes/reminders/index.js: line 6, col 28, Expected \'===\' and instead saw \'==\'.\nroutes/reminders/index.js: line 7, col 7, Expected \'{\' and instead saw \'alert\'.\n\n2 errors');
  });
});