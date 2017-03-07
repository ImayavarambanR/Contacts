define('sampleapp/routes/contacts/disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('contact', params.contact_id);
    }
  });
});