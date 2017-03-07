define("sampleapp/routes/contacts/create", ["exports", "ember"], function (exports, _ember) {
  var Person = _ember["default"].Object.extend({
    name: "Hellooo",
    fname: "TTK"
  });
  var pp = Person.create();
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return pp;
    }
  });
});