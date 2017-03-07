define('sampleapp/routes/contacts/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      console.log("Hello");
      return this.get('store').findAll('contact');
      //return "Gone";
    }
  });
});