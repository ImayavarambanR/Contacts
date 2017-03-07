define('sampleapp/components/sort-by', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    result: "Default",
    state: false,
    actions: {
      ascc: function ascc() {
        this.set('state', true);
        this.set('result', "Ascending");
      },
      descc: function descc() {
        this.set('state', true);
        this.set('result', "Descending");
      },
      datee: function datee() {
        this.set('state', true);
        this.set('result', "Date");
      },
      searchee: function searchee() {
        this.set('state', true);
        this.set('result', "CSearch");
      }
    }
  });
});