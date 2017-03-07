import Ember from 'ember';
export default Ember.Route.extend({
  model()
  {

  },
  afterModel(model,transition)
  {
    if(this.get('result'))
    {
      this.transitionTo('about');
    }
  }
});
