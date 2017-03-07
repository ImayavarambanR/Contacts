define('sampleapp/tests/integration/components/sort-by-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/sort-by-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sort-by-test.js should pass jshint.');
  });
});