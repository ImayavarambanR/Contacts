define('sampleapp/routes/reminders/disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('reminder', params.reminder_id);
    }
  });
});