define('sampleapp/components/reminder-filter', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    value: '',

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.get('filter')('').then(function (res) {
        return _this.set('results', res);
      });
    },

    actions: {
      filteree: function filteree() {
        var _this2 = this;

        var inp = this.get('value');
        var actfunc = this.get('filter');
        actfunc(inp).then(function (res) {
          return _this2.set('results', res);
        });
      }
    }
  });
});