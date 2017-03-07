"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('sampleapp/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('sampleapp/app', ['exports', 'ember', 'sampleapp/resolver', 'ember-load-initializers', 'sampleapp/config/environment'], function (exports, _ember, _sampleappResolver, _emberLoadInitializers, _sampleappConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sampleappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sampleappConfigEnvironment['default'].podModulePrefix,
    Resolver: _sampleappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sampleappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('sampleapp/components/contact-filter', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    value: '',

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.get('filter')('').then(function (res) {
        return _this.set('results', res);
      });
    },

    actions: {
      filteree: function filteree() {
        var _this2 = this;

        var inp = this.get('value');
        var actfunc = this.get('filter');
        actfunc(inp).then(function (res) {
          return _this2.set('results', res);
        });
      }
    }
  });
});
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
define('sampleapp/components/contact-list', ['exports', 'ember'], function (exports, _ember) {
  $(function () {
    $("a[data-toggle='tooltip']").tooltip();
  });
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    actions: {
      'delete': function _delete() {
        this.get('store').findRecord('contact', "91", { backgroundReload: false }).then(function (contact) {
          contact.destroyRecord();
          // alert(contact.get('isDeleted')); // => true
          // contact.save();
        });
      }
    }
  });
});
define('sampleapp/components/reminder-disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    init: function init() {
      var s = this.get('sort');
      var data = this.get('list');
      var a;
      if (s == "Ascending") {
        a = data.sortBy('title');
      } else if (s == "Descending") {
        a = data.sortBy('title').reverse();
      } else if (s == "Date") {
        a = data.sortBy('date');
      } else if (s == "Default") {
        a = data;
      }
      this.set('lists', a);
      this._super.apply(this, arguments);
    }
  });
});
define('sampleapp/components/reminder-filter', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    value: '',

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.get('filter')('').then(function (res) {
        return _this.set('results', res);
      });
    },

    actions: {
      filteree: function filteree() {
        var _this2 = this;

        var inp = this.get('value');
        var actfunc = this.get('filter');
        actfunc(inp).then(function (res) {
          return _this2.set('results', res);
        });
      }
    }
  });
});
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
define('sampleapp/components/reminder-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('sampleapp/components/sort-by', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    result: "Default",
    state: false,
    actions: {
      ascc: function ascc() {
        this.set('state', true);
        this.set('result', "Ascending");
      },
      descc: function descc() {
        this.set('state', true);
        this.set('result', "Descending");
      },
      datee: function datee() {
        this.set('state', true);
        this.set('result', "Date");
      },
      searchee: function searchee() {
        this.set('state', true);
        this.set('result', "CSearch");
      }
    }
  });
});
define('sampleapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('sampleapp/controllers/contacts/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      filterByName: function filterByName(param) {
        if (param !== '') {
          return this.get('store').query('contact', { name: param });
        } else {
          return this.get('store').findAll('contact');
        }
      }
    }
  });
});
define('sampleapp/controllers/reminders/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    nn: 'reminder-fter',
    result: null,
    isDisp: true,
    changee: _ember['default'].computed('result', function () {
      this.set('isDisp', false);
      return false;
    }),
    actions: {
      filterByTitle: function filterByTitle(param) {
        if (param !== '') {
          return this.get('store').query('reminder', { title: param });
        } else {
          return this.get('store').findAll('reminder');
        }
      }
    }
  });
});
define('sampleapp/helpers/app-version', ['exports', 'ember', 'sampleapp/config/environment'], function (exports, _ember, _sampleappConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _sampleappConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('sampleapp/helpers/check', ['exports', 'ember'], function (exports, _ember) {
  exports.check = check;

  function check(params /*, hash*/) {
    var a = params[0];
    var b = params[1];
    return a == b;
  }

  exports['default'] = _ember['default'].Helper.helper(check);
});
define('sampleapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('sampleapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('sampleapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sampleapp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sampleappConfigEnvironment) {
  var _config$APP = _sampleappConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('sampleapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sampleapp/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sampleapp/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'sampleapp/config/environment', 'sampleapp/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _sampleappConfigEnvironment, _sampleappMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_sampleappConfigEnvironment['default'].environment, _sampleappConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_sampleappConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _sampleappConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _sampleappMirageConfig['default'], testConfig: _sampleappMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('sampleapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('sampleapp/initializers/export-application-global', ['exports', 'ember', 'sampleapp/config/environment'], function (exports, _ember, _sampleappConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_sampleappConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _sampleappConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_sampleappConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sampleapp/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sampleapp/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('sampleapp/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("sampleapp/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('sampleapp/mirage/config', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = function () {
    this.namespace = '/api';

    var contacts = [{
      type: 'contacts',
      id: '91',
      attributes: {
        img: 'http://bootdey.com/img/Content/user_1.jpg',
        name: 'Imaya',
        phone: '9500881944',
        group: 'Family',
        fb: 'https://www.facebook.com/imaya.varamban.94',
        twitter: 'https://twitter.com/imayamsoft',
        linkedin: 'https://www.linkedin.com/in/imayavaramban-r-4505857b',
        desc: 'A Cool Coder',
        email: "intellectualimay@gmail.com"
      }
    }, {
      type: 'contacts',
      id: '92',
      attributes: {
        img: 'http://bootdey.com/img/Content/user_2.jpg',
        name: 'Ilaiya',
        phone: '7373696660',
        group: 'Family',
        fb: 'https://www.facebook.com/intellectual.imay',
        twitter: 'https://twitter.com/imayamsoft',
        linkedin: 'https://www.linkedin.com/in/imayavaramban-r-4505857b',
        desc: 'Funny',
        email: "karateimay@gmail.com"
      }
    }, {
      type: 'contacts',
      id: '93',
      attributes: {
        img: 'http://bootdey.com/img/Content/user_3.jpg',
        name: 'Raja',
        phone: '9443358841',
        group: 'Family',
        fb: 'https://www.facebook.com/imaya.varamban.94',
        twitter: 'https://twitter.com/imayamsoft',
        linkedin: 'https://www.linkedin.com/in/imayavaramban-r-4505857b',
        desc: 'Friendly',
        email: "iniyavang@gmail.com"
      }
    }];

    var reminders = [{
      type: 'reminders',
      id: '91',
      attributes: {
        title: 'Wednesday Routine',
        purpose: 'To go for play',
        date: '2017-02-15',
        time: '06:30:00',
        desc: 'You have to go to ground by 6.30AM to play Cricket...',
        type: 'Important',
        ord: '1'
      }
    }, {
      type: 'reminders',
      id: '92',
      attributes: {
        title: 'Tuesday Special',
        purpose: 'To Call Mom',
        date: '2017-02-14',
        time: '08:30:00',
        desc: 'You have to call her and remind about Sister...',
        type: 'Important',
        ord: '2'
      }
    }, {
      type: 'reminders',
      id: '93',
      attributes: {
        title: 'Wednesday Special',
        purpose: 'To Eat Biriyani',
        date: '2017-02-15',
        time: '13:00:00',
        desc: 'Go Early Otherwise You have to wait in a long Queue...',
        type: 'Less Important',
        ord: '3'
      }
    }];

    this.get('/contacts', function (db, request) {
      if (request.queryParams.name !== undefined) {
        var filteredContacts = contacts.filter(function (i) {
          return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
        });
        return { data: filteredContacts };
      } else {
        return { data: contacts };
      }
    });

    this.get('/reminders', function (db, request) {
      if (request.queryParams.title !== undefined) {
        var filteredReminders = reminders.filter(function (i) {
          return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
        });
        return { data: filteredReminders };
      } else {
        return { data: reminders };
      }
    });

    this.get('/contacts/:id', function (db, request) {
      return { data: contacts.find(function (contact) {
          return request.params.id === contact.id;
        }) };
    });

    this.get('/reminders/:id', function (db, request) {
      return { data: reminders.find(function (reminder) {
          return request.params.id === reminder.id;
        }) };
    });
    this.post('/contacts');
    this.post('/reminders');
    this['delete']('/contacts/:id');
    /*this.post('/contacts',function(db,request){
      var data = JSON.parse(request.requestBody);
        console.log("LKL");
        console.log(data);
        if (data.data.attributes.name) {
          return contacts.pushObject(data);
        } else {
          return new Mirage.Response(400, { some: 'header' }, { message: 'name cannot be blank' });
        }
    });*/
  };
});
define('sampleapp/mirage/models/contact', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define('sampleapp/mirage/models/reminder', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define("sampleapp/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('sampleapp/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('sampleapp/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    img: _emberData['default'].attr('string', { defaultValue: 'http://bootdey.com/img/Content/user_1.jpg' }),
    name: _emberData['default'].attr(),
    phone: _emberData['default'].attr(),
    group: _emberData['default'].attr('string', { defaultValue: 'Friends' }),
    fb: _emberData['default'].attr(),
    twitter: _emberData['default'].attr(),
    linkedin: _emberData['default'].attr(),
    desc: _emberData['default'].attr(),
    email: _emberData['default'].attr()
  });
});
define('sampleapp/models/reminder', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    purpose: _emberData['default'].attr(),
    date: _emberData['default'].attr(),
    time: _emberData['default'].attr(),
    desc: _emberData['default'].attr(),
    type: _emberData['default'].attr('string', { defaultValue: 'Less Important' }),
    ord: _emberData['default'].attr('string', { defaultValue: '1' })
  });
});
define('sampleapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('sampleapp/router', ['exports', 'ember', 'sampleapp/config/environment'], function (exports, _ember, _sampleappConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sampleappConfigEnvironment['default'].locationType,
    rootURL: _sampleappConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('contacts', function () {
      this.route('create');
      this.route('disp', { path: '/:contact_id' });
    });
    this.route('reminders', function () {
      this.route('create');
      this.route('disp', { path: '/:reminder_id' });
    });
    this.route('about');

    this.route('reminder-list');
  });

  exports['default'] = Router;
});
define('sampleapp/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sampleapp/routes/contacts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sampleapp/routes/contacts/create', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {},
    afterModel: function afterModel(model, transition) {
      if (this.get('result')) {
        this.transitionTo('about');
      }
    }
  });
});
define('sampleapp/routes/contacts/disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('contact', params.contact_id);
    }
  });
});
define('sampleapp/routes/contacts/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('contact');
      //return "Gone";
    }
  });
});
define('sampleapp/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('reminder');
    }
  });
});
define('sampleapp/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('home');
    }
  });
});
define('sampleapp/routes/reminders', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sampleapp/routes/reminders/create', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sampleapp/routes/reminders/disp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('reminder', params.reminder_id);
    }
  });
});
define('sampleapp/routes/reminders/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('reminder');
    }
  });
});
define('sampleapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("sampleapp/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cJw5APpy", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Hello\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/about.hbs" } });
});
define("sampleapp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8wNFJYV8", "block": "{\"statements\":[[\"open-element\",\"link\",[]],[\"static-attr\",\"href\",\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\"],[\"static-attr\",\"rel\",\"stylesheet\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"partial\",\"navi\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "sampleapp/templates/application.hbs" } });
});
define("sampleapp/templates/components/contact-filter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "r6TjSwoy", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container bootstrap snippet\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-8\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body p-t-0\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"key-up\",\"placeholder\"],[[\"get\",[\"value\"]],\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],\"filteree\"],null],\"Search...\"]]],false],[\"text\",\"\\n                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-effect-ripple btn-primary\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-search\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\",[[\"get\",[\"results\"]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/contact-filter.hbs" } });
});
define("sampleapp/templates/components/contact-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "P6taALX7", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"name\",[\"get\",[\"name\"]],\"Enter Name\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"number\"],[\"flush-element\"],[\"text\",\"Number\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"number\",\"form-control\",\"number\",[\"get\",[\"phone\"]],\"Contact Number\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"facebook\"],[\"flush-element\"],[\"text\",\"Facebook\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"facebook\",[\"get\",[\"facebook\"]],\"Profile Name\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"twitter\"],[\"flush-element\"],[\"text\",\"Twitter\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"twitter\",[\"get\",[\"twitter\"]],\"Handle\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"linkedin\"],[\"flush-element\"],[\"text\",\"LinkedIn\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"linkedin\",[\"get\",[\"linkedin\"]],\"LinkedIn Url\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"email\",\"form-control\",\"email\",[\"get\",[\"email\"]],\"Email id\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"desc\"],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"id\",\"value\",\"rows\"],[\"form-control\",\"desc\",[\"get\",[\"desc\"]],\"3\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"picture\"],[\"flush-element\"],[\"text\",\"Profile Picture\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"file\"],[\"static-attr\",\"class\",\"form-control-file\"],[\"static-attr\",\"id\",\"picture\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"fieldset\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"legend\",[]],[\"flush-element\"],[\"text\",\"Group\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"group\"],[\"static-attr\",\"id\",\"op1\"],[\"static-attr\",\"value\",\"family\"],[\"static-attr\",\"checked\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Family\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"group\"],[\"static-attr\",\"id\",\"op2\"],[\"static-attr\",\"value\",\"family\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Friend\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check disabled\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"group\"],[\"static-attr\",\"id\",\"op3\"],[\"static-attr\",\"value\",\"family\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Office\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"contacts.index\"],null,1],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"issad\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"get\",[\"con\"]]]],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"clickyy\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/contact-form.hbs" } });
});
define("sampleapp/templates/components/contact-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "04Zgarmc", "block": "{\"statements\":[[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body p-t-10\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"media-main\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"pull-left\"],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"thumb-lg img-circle bx-s\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"contact\",\"img\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pull-right btn-group-sm\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"btn btn-success tooltips\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-original-title\",\"Edit\"],[\"flush-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-pencil\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn btn-danger tooltips\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"data-original-title\",\"Delete\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\"]],[\"flush-element\"],[\"text\",\"\\n                          \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-close\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"info\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"block\",[\"link-to\"],[\"contacts.disp\",[\"get\",[\"contact\"]]],null,0],[\"text\",\"\\n                      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-muted\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-phone\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"contact\",\"phone\"]],false],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-file-o\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"contact\",\"desc\"]],false],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clearfix\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"social-links list-inline p-b-10\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"title\",\"\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"class\",\"tooltips\"],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"data-original-title\",[\"unknown\",[\"contact\",\"group\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-users\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"title\",\"\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"class\",\"tooltips\"],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"data-original-title\",[\"unknown\",[\"contact\",\"fb\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-facebook\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"title\",\"\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"class\",\"tooltips\"],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"data-original-title\",[\"unknown\",[\"contact\",\"twitter\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-twitter\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"title\",\"\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"class\",\"tooltips\"],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"data-original-title\",[\"unknown\",[\"contact\",\"linkedin\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-linkedin\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"title\",\"\"],[\"static-attr\",\"data-placement\",\"top\"],[\"static-attr\",\"data-toggle\",\"tooltip\"],[\"static-attr\",\"class\",\"tooltips\"],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"data-original-title\",[\"unknown\",[\"contact\",\"email\"]],null],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-envelope-o\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"name\"]],false],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/contact-list.hbs" } });
});
define("sampleapp/templates/components/reminder-disp", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BLmbDaQl", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"lists\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"list-group-item-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"title\"]],false],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"float:right;color:blue\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"date\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"list-group-item-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"purpose\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.disp\",[\"get\",[\"reminder\"]]],[[\"class\"],[\"list-group-item\"]],0]],\"locals\":[\"reminder\"]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/reminder-disp.hbs" } });
});
define("sampleapp/templates/components/reminder-filter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LPRDb95g", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container bootstrap snippet\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-8\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body p-t-0\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"key-up\",\"placeholder\"],[[\"get\",[\"value\"]],\"form-control\",[\"helper\",[\"action\"],[[\"get\",[null]],\"filteree\"],null],\"Search By Title...\"]]],false],[\"text\",\"\\n                        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-effect-ripple btn-primary\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-search\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\",[[\"get\",[\"results\"]]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/reminder-filter.hbs" } });
});
define("sampleapp/templates/components/reminder-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Dkch8UAD", "block": "{\"statements\":[[\"open-element\",\"form\",[]],[\"static-attr\",\"style\",\"margin-top:50px;\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"title\"],[\"flush-element\"],[\"text\",\"Title\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"title\",[\"get\",[\"title\"]],\"Title\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"purpose\"],[\"flush-element\"],[\"text\",\"Purpose\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\",\"placeholder\"],[\"text\",\"form-control\",\"purpose\",[\"get\",[\"purpose\"]],\"Purpose\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"date\"],[\"flush-element\"],[\"text\",\"Date\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\"],[\"date\",\"form-control\",\"date\",[\"get\",[\"date\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"Time\"],[\"flush-element\"],[\"text\",\"Time\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\"],[\"time\",\"form-control\",\"time\",[\"get\",[\"time\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"exampleTextarea\"],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"id\",\"value\",\"rows\"],[\"form-control\",\"desc\",[\"get\",[\"desc\"]],\"3\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"fieldset\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"legend\",[]],[\"flush-element\"],[\"text\",\"Type\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"type\"],[\"static-attr\",\"id\",\"op1\"],[\"static-attr\",\"value\",\"Important\"],[\"static-attr\",\"checked\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Important\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"type\"],[\"static-attr\",\"id\",\"op2\"],[\"static-attr\",\"value\",\"Less Important\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Less Important\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-check disabled\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"form-check-label\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"radio\"],[\"static-attr\",\"class\",\"form-check-input\"],[\"static-attr\",\"name\",\"type\"],[\"static-attr\",\"id\",\"op3\"],[\"static-attr\",\"value\",\"Finished\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Finished\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"reminders.index\"],null,0],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"clickyy\"]],[\"flush-element\"],[\"text\",\"Create\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/reminder-form.hbs" } });
});
define("sampleapp/templates/components/reminder-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LoI39DLY", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.disp\",[\"get\",[\"reminder\"]]],[[\"class\"],[\"list-group-item\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"list-group-item-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"title\"]],false],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"float:right;color:blue\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"date\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"list-group-item-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"purpose\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/reminder-list.hbs" } });
});
define("sampleapp/templates/components/sort-by", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GTHpbm34", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"dropdown\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary dropdown-toggle\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"flush-element\"],[\"text\",\"Sort By\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"ascc\"]],[\"flush-element\"],[\"text\",\"Ascending \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-sort-alpha-asc\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"descc\"]],[\"flush-element\"],[\"text\",\"Descending \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-sort-alpha-desc\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"datee\"]],[\"flush-element\"],[\"text\",\"Date \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-calendar\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"searchee\"]],[\"flush-element\"],[\"text\",\"Custom Search \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-search\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"state\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"yield\",\"default\",[[\"get\",[\"result\"]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/components/sort-by.hbs" } });
});
define("sampleapp/templates/contacts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "POJejneo", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/contacts.hbs" } });
});
define("sampleapp/templates/contacts/create", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iKEgVQ4j", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"contacts.index\"],null,1],[\"text\",\"\\n\"],[\"block\",[\"contact-form\"],null,null,0],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\"]],\"locals\":[\"result\"]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"style\",\"float:right\"],[\"static-attr\",\"class\",\"btn btn-lg btn-success\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/contacts/create.hbs" } });
});
define("sampleapp/templates/contacts/disp", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ri0/q3AV", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"contacts.index\"],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card card-info\"],[\"static-attr\",\"style\",\"width: 50rem;margin-left:35%;background:green;border-radius:5px;padding:3px;height:700px;color:white;\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"card-img-top img-circle\"],[\"static-attr\",\"width\",\"304\"],[\"static-attr\",\"height\",\"236\"],[\"static-attr\",\"style\",\"margin-left:20%;border:2px black solid;\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"model\",\"img\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"model\",\"name\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-block\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"card-title\"],[\"static-attr\",\"style\",\"margin-left:3px;\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"static-attr\",\"style\",\"color:black;\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"card-text\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-phone\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"phone\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"card-text\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-users\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"group\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group list-group-flush\"],[\"static-attr\",\"style\",\"color:black;\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"model\",\"fb\"]],null],[\"flush-element\"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-facebook-official\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"fb\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"model\",\"twitter\"]],null],[\"flush-element\"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-twitter-square\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"twitter\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"model\",\"linkedin\"]],null],[\"flush-element\"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-linkedin-square\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"linkedin\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"model\",\"linkedin\"]],null],[\"flush-element\"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-envelope-o\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"email\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-block text-center\"],[\"static-attr\",\"style\",\"background:white;color:black;padding-left:3px;\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"desc\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-lg btn-info\"],[\"flush-element\"],[\"text\",\"<< Back\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/contacts/disp.hbs" } });
});
define("sampleapp/templates/contacts/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JYDykoYC", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"contacts.create\"],null,2],[\"text\",\"\\n\\n\"],[\"block\",[\"contact-filter\"],null,[[\"filter\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"filterByName\"],null]]],1],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"contact-list\"],null,[[\"contact\"],[[\"get\",[\"contact\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"contact\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"contacts\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"contacts\"]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"style\",\"float:right\"],[\"static-attr\",\"class\",\"btn btn-lg btn-danger\"],[\"flush-element\"],[\"text\",\"Create\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/contacts/index.hbs" } });
});
define("sampleapp/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "a/yCNWqj", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"text-carousel\"],[\"static-attr\",\"class\",\"carousel slide\"],[\"static-attr\",\"data-ride\",\"carousel\"],[\"static-attr\",\"style\",\"height:200px;\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" Indicators \"],[\"text\",\"\\n  \"],[\"open-element\",\"ol\",[]],[\"static-attr\",\"class\",\"carousel-indicators\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"data-target\",\"#myCarousel\"],[\"static-attr\",\"data-slide-to\",\"0\"],[\"static-attr\",\"class\",\"active\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"data-target\",\"#myCarousel\"],[\"static-attr\",\"data-slide-to\",\"1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"data-target\",\"#myCarousel\"],[\"static-attr\",\"data-slide-to\",\"2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Wrapper for slides \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-offset-3 col-xs-6\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"carousel-inner bg-primary\"],[\"static-attr\",\"style\",\"padding-left:20px;height:200px;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Controls \"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"left carousel-control\"],[\"static-attr\",\"href\",\"#text-carousel\"],[\"static-attr\",\"data-slide\",\"prev\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-chevron-left\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"right carousel-control\"],[\"static-attr\",\"href\",\"#text-carousel\"],[\"static-attr\",\"data-slide\",\"next\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-chevron-right\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"item \",[\"helper\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"reminder\",\"ord\"]],\"1\"],null],\"active\"],null]]]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"carousel-content\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center bg-success\"],[\"static-attr\",\"style\",\"color:black;\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"purpose\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"reminder\",\"date\"]],false],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"reminder\"]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/home.hbs" } });
});
define("sampleapp/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Zk4SCWCo", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/index.hbs" } });
});
define("sampleapp/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Y2GIw6nK", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header col-lg-3\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse col-lg-9\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"about\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"contacts\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"reminders\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Reminders\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Contacts\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Personal Manager\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/navbar.hbs" } });
});
define("sampleapp/templates/navi", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oZJqncyX", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header col-lg-3\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse col-lg-9\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"about\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"contacts\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"reminders\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Reminders\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Contacts\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Personal Manager\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/navi.hbs" } });
});
define("sampleapp/templates/reminders", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GVV3CZtb", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/reminders.hbs" } });
});
define("sampleapp/templates/reminders/create", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3EdUYSqs", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.index\"],null,0],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"reminder-form\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-lg btn-danger\"],[\"static-attr\",\"style\",\"float:right\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/reminders/create.hbs" } });
});
define("sampleapp/templates/reminders/disp", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZX5q/ZIV", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.index\"],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card bg-primary\"],[\"static-attr\",\"style\",\"width: 50rem;margin-left:35%;border-radius:5px;padding:3px;height:400px;\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-block\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"card-title text-center\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"purpose\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"card-text\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"style\",\"color:black;text-decoration:underline;\"],[\"flush-element\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Desc : \"],[\"close-element\"],[\"close-element\"],[\"append\",[\"unknown\",[\"model\",\"desc\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group list-group-flush\"],[\"static-attr\",\"style\",\"color:black;\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-calendar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"date\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-clock-o\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" : \"],[\"append\",[\"unknown\",[\"model\",\"time\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-lg btn-info\"],[\"flush-element\"],[\"text\",\"<< Back\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/reminders/disp.hbs" } });
});
define("sampleapp/templates/reminders/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hUzYcGtq", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"reminders.create\"],null,10],[\"text\",\"\\n\\n\\n\\n\"],[\"block\",[\"sort-by\"],null,null,9],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"reminder-disp\"],null,[[\"sort\",\"list\"],[[\"get\",[\"result\"]],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"Date\"],null]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"reminder-disp\"],null,[[\"sort\",\"list\"],[[\"get\",[\"result\"]],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"Descending\"],null]],null,2,1]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"reminder-disp\"],null,[[\"sort\",\"list\"],[[\"get\",[\"result\"]],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"Ascending\"],null]],null,4,3]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"reminder-list\"],null,[[\"reminder\"],[[\"get\",[\"reminder\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"reminder\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"reminders\"]]],null,6],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"reminders\"]},{\"statements\":[[\"block\",[\"reminder-filter\"],null,[[\"filter\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"filterByTitle\"],null]]],7],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"check\"],[[\"get\",[\"result\"]],\"CSearch\"],null]],null,8,5]],\"locals\":[\"result\"]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"style\",\"float:right;margin-top:-50px;\"],[\"static-attr\",\"class\",\"btn btn-lg btn-danger\"],[\"flush-element\"],[\"text\",\"Create\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/reminders/index.hbs" } });
});
define('sampleapp/tests/mirage/mirage/config.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/config.js should pass jshint.\nmirage/config.js: line 1, col 8, \'Mirage\' is defined but never used.\n\n1 error');
  });
});
define('sampleapp/tests/mirage/mirage/models/contact.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/contact.js should pass jshint.');
  });
});
define('sampleapp/tests/mirage/mirage/models/reminder.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/reminder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/reminder.js should pass jshint.');
  });
});
define('sampleapp/tests/mirage/mirage/scenarios/default.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('sampleapp/tests/mirage/mirage/serializers/application.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('sampleapp/config/environment', ['ember'], function(Ember) {
  var prefix = 'sampleapp';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("sampleapp/app")["default"].create({"name":"sampleapp","version":"0.0.0+0890aef3"});
}

/* jshint ignore:end */
//# sourceMappingURL=sampleapp.map
