import Ember from 'ember';

export default Ember.Component.extend({
  init()
  {
    var s=this.get('sort');
    var data=this.get('list');
    var a;
    if(s=="Ascending"){
      a=data.sortBy('title');
    }
    else if(s=="Descending"){
      a=data.sortBy('title').reverse();
    }
    else if(s=="Date"){
      a=data.sortBy('date');
    }
    else if(s=="Default"){
      a=data;
    }
    this.set('lists',a);
    this._super(...arguments);
  }
});
