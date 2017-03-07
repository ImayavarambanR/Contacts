QUnit.module('JSHint | routes/contacts/create.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/contacts/create.js should pass jshint.\nroutes/contacts/create.js: line 7, col 20, \'transition\' is defined but never used.\nroutes/contacts/create.js: line 7, col 14, \'model\' is defined but never used.\n\n2 errors');
});
