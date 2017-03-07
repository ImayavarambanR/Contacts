define('sampleapp/routes/contacts/create', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {},
    afterModel: function afterModel(model, transition) {
      if (this.get('result')) {
        this.transitionTo('about');
      }
    }
  });
});