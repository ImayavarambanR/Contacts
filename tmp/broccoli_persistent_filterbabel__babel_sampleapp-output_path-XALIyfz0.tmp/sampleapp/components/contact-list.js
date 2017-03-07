define("sampleapp/components/contact-list", ["exports", "ember"], function (exports, _ember) {
  $(function () {
    console.log("KK");
    $("a[data-toggle='tooltip']").tooltip();
  });
  exports["default"] = _ember["default"].Component.extend({});
});