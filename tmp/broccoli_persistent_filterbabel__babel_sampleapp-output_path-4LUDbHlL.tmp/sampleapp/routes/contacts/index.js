define('sampleapp/routes/contacts/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      filterByName: function filterByName(param) {
        if (param !== '') {
          return this.get('store').query('contact', { name: param });
        } else {
          return this.get('store').findAll('contact');
        }
      }
    },
    model: function model() {
      return this.get('store').findAll('contact');
    }
  });
});