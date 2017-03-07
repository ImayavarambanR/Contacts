define('sampleapp/components/reminder-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    issad: false,
    store: _ember['default'].inject.service(),
    actions: {
      clickyy: function clickyy() {
        //console.log(this.get(name) + this.get(number));
        this.get('store').createRecord('reminder', {
          title: this.get('title'),
          purpose: this.get('purpose'),
          date: this.get('date'),
          time: this.get('time'),
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