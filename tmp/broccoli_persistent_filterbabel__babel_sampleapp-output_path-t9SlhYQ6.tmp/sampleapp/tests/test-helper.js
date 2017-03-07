define('sampleapp/tests/test-helper', ['exports', 'sampleapp/tests/helpers/resolver', 'ember-qunit'], function (exports, _sampleappTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_sampleappTestsHelpersResolver['default']);
});