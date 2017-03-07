import Ember from 'ember';

export default Ember.Component.extend({
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((res) => this.set('results', res));
  },

  actions: {
    filteree() {
      let inp = this.get('value');
      let actfunc = this.get('filter');
      actfunc(inp).then((res) => this.set('results', res));
    }
  }
});
