define('sampleapp/routes/reminders/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      if (this.get('result') == "Ascending") alert("KL");
      return this.get('store').findAll('reminder');
    }
  });
});