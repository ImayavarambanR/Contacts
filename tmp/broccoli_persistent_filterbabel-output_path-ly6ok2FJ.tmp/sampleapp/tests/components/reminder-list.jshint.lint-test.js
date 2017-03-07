define('sampleapp/tests/components/reminder-list.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/reminder-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/reminder-list.js should pass jshint.');
  });
});