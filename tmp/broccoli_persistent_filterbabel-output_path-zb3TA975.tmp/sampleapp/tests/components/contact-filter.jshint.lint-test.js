define('sampleapp/tests/components/contact-filter.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/contact-filter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-filter.js should pass jshint.');
  });
});