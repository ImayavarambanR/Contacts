define('sampleapp/controllers/reminders/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      filterByTitle: function filterByTitle(param) {
        if (param !== '') {
          return this.get('store').query('reminder', { title: param });
        } else {
          return this.get('store').findAll('reminder');
        }
      }
    }
  });
});