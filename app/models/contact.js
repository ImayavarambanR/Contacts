import DS from 'ember-data';

export default DS.Model.extend({
  img:DS.attr('string', { defaultValue: 'http://bootdey.com/img/Content/user_1.jpg'}),
  name: DS.attr(),
  phone: DS.attr(),
  group: DS.attr('string', { defaultValue: 'Friends'}),
  fb: DS.attr(),
  twitter: DS.attr(),
  linkedin: DS.attr(),
  desc:DS.attr(),
  email: DS.attr()
});
