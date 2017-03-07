import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr(),
  purpose:DS.attr(),
  date:DS.attr(),
  time:DS.attr(),
  desc:DS.attr(),
  type:DS.attr('string', { defaultValue: 'Less Important'}),
  ord:DS.attr('string', { defaultValue: '1'})
});
