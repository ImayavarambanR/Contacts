define('sampleapp/components/contact-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    issad: false,
    store: _ember['default'].inject.service(),
    actions: {
      clickyy: function clickyy() {
        //console.log(this.get(name) + this.get(number));
        this.get('store').createRecord('contact', {
          name: this.get('name'),
          phone: this.get('phone'),
          fb: this.get('facebook'),
          twitter: this.get('twitter'),
          linkedin: this.get('linkedin'),
          email: this.get('email'),
          desc: this.get('desc')
        }).save();

        //con.set('name',name);
        //alert(this.get('con').name);
        this.set('con', {
          name: this.get('name'),
          number: this.get('number'),
          fb: this.get('facebook'),
          twitter: this.get('twitter'),
          linkedin: this.get('linkedin'),
          email: this.get('email')
        });
        this.set('issad', true);
        console.log(this.get('con').name);
        console.log(this.get('issad'));
        //this.transitionToRoute('about');
      }
    }
  });
});