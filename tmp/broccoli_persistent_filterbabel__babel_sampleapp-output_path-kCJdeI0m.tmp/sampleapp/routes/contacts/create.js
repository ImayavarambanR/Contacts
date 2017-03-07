define('sampleapp/routes/contacts/create', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      alert(result.name);
    }
  });
});