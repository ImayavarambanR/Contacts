define('sampleapp/components/reminder-disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      var s = this.get('sort');
      var data = this.get('list');
      var a;
      if (s == "Ascending") {
        a = data.sortBy('title');
      } else if (s == "Descending") {
        a = data.sortBy('title').reverse();
      } else if (s == "Date") {
        a = data.sortBy('date');
      } else if (s == "Default") {
        a = data;
      }
      this.set('lists', a);
      this._super.apply(this, arguments);
    }
  });
});