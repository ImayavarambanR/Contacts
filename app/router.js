import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('contacts', function() {
    this.route('create');
    this.route('disp',{path:'/:contact_id'});
  });
  this.route('reminders', function() {
    this.route('create');
    this.route('disp',{path:'/:reminder_id'});
  });
  this.route('about');


  this.route('reminder-list');
});

export default Router;
