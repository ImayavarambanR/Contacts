define('sampleapp/tests/components/reminder-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/reminder-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/reminder-form.js should pass jshint.');
  });
});