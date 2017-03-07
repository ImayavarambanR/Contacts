QUnit.module('JSHint | routes/contacts.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/contacts.js should pass jshint.\nroutes/contacts.js: line 13, col 23, Expected \'===\' and instead saw \'==\'.\nroutes/contacts.js: line 16, col 5, Expected \'{\' and instead saw \'alert\'.\nroutes/contacts.js: line 2, col 10, \'hello\' is defined but never used.\n\n3 errors');
});
