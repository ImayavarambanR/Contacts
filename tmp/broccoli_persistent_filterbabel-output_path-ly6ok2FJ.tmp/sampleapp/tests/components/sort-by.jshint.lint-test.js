define('sampleapp/tests/components/sort-by.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sort-by.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sort-by.js should pass jshint.');
  });
});