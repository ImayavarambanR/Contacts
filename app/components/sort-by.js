import Ember from 'ember';
export default Ember.Component.extend({
  result:"Default",
  state:false,
  actions:
  {
    ascc()
    {
      this.set('state',true);
      this.set('result',"Ascending");
    },
    descc()
    {
      this.set('state',true);
      this.set('result',"Descending");
    },
    datee()
    {
      this.set('state',true);
      this.set('result',"Date");
    },
    searchee()
    {
      this.set('state',true);
      this.set('result',"CSearch");
    }
  }
});
