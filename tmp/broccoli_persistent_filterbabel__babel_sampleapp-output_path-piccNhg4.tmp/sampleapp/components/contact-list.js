define('sampleapp/components/contact-list', ['exports', 'ember'], function (exports, _ember) {
  $(function () {
    $("a[data-toggle='tooltip']").tooltip();
  });
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    actions: {
      'delete': function _delete() {
        this.get('store').findRecord('contact', "91", { backgroundReload: false }).then(function (contact) {
          contact.destroyRecord();
          // alert(contact.get('isDeleted')); // => true
          // contact.save();
        });
      }
    }
  });
});