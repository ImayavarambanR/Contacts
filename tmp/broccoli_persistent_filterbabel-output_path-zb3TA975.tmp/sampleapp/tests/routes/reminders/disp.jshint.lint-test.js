define('sampleapp/tests/routes/reminders/disp.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reminders/disp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/reminders/disp.js should pass jshint.');
  });
});