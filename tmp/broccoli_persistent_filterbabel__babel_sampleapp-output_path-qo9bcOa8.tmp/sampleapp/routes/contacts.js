define("sampleapp/routes/contacts", ["exports", "ember"], function (exports, _ember) {
  function hello() {
    //alert("Loki");
    return { yess: true };
  }
  var self = this;
  exports["default"] = _ember["default"].Route.extend({
    samp: { yess: true },
    model: function model() {
      addEventListener("keydown", function (event) {
        if (event.keyCode == 32 && event.ctrlKey)
          //this.set('yess',true);
          //this.transitionTo('reminders');
          alert("Hello");
        return self.get('samp');
      });
    }
  });
});