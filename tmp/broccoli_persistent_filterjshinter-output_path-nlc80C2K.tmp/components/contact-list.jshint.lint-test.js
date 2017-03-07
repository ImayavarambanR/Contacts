QUnit.module('JSHint | components/contact-list.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/contact-list.js should pass jshint.\ncomponents/contact-list.js: line 2, col 1, \'$\' is not defined.\ncomponents/contact-list.js: line 4, col 2, \'$\' is not defined.\n\n2 errors');
});
