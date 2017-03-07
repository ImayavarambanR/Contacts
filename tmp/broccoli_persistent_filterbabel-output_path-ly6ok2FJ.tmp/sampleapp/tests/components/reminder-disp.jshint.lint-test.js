define('sampleapp/tests/components/reminder-disp.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/reminder-disp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/reminder-disp.js should pass jshint.');
  });
});