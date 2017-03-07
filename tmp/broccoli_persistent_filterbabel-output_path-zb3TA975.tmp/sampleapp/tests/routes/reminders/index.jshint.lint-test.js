define('sampleapp/tests/routes/reminders/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reminders/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/reminders/index.js should pass jshint.\nroutes/reminders/index.js: line 4, col 10, Expected \':\' and instead saw \'this\'.\nroutes/reminders/index.js: line 4, col 14, Expected an identifier and instead saw \'.\'.\nroutes/reminders/index.js: line 4, col 15, Expected \'}\' to match \'{\' from line 3 and instead saw \'get\'.\nroutes/reminders/index.js: line 4, col 18, Bad invocation.\nroutes/reminders/index.js: line 4, col 47, Expected \')\' and instead saw \';\'.\nroutes/reminders/index.js: line 4, col 48, Missing semicolon.\nroutes/reminders/index.js: line 4, col 47, Unrecoverable syntax error. (66% scanned).\n\n7 errors');
  });
});