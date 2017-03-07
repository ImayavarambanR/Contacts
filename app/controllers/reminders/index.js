import Ember from 'ember';

export default Ember.Controller.extend({
  nn:'reminder-fter',
  actions: {
    filterByTitle(param) {
      if (param !== '') {
        return this.get('store').query('reminder', { title: param });
      } else {
        return this.get('store').findAll('reminder');
      }
    }
  }
});
