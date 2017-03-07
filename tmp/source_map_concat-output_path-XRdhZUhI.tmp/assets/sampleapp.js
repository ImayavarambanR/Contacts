"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('sampleapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
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
    this.route('contacts');
    this.route('reminders');
    this.route('about');
  });

  exports['default'] = Router;
});
define('sampleapp/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("sampleapp/routes/contacts", ["exports", "ember"], function (exports, _ember) {
  function hello() {
    //alert("Loki");
    return { yess: true };
  }
  var self = this;
  exports["default"] = _ember["default"].Route.extend({
    samp: { yess: true },
    model: function model() {
      addEventListener("keydown", function (event) {
        if (event.keyCode == 32 && event.ctrlKey)
          //this.set('yess',true);
          //this.transitionTo('reminders');
          alert("Hello");
        return self.get('samp');
      });
    }
  });
});
define('sampleapp/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
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
  exports["default"] = Ember.HTMLBars.template({ "id": "pmzap0h7", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"partial\",\"navbar\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "sampleapp/templates/application.hbs" } });
});
define("sampleapp/templates/contacts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "dJIJMTNC", "block": "{\"statements\":[[\"text\",\"asdfs\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"asfd\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"autofocus\"],[[\"get\",[\"model\",\"yess\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"model\",\"yess\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/contacts.hbs" } });
});
define("sampleapp/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1Z5iVKYS", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/home.hbs" } });
});
define("sampleapp/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Zk4SCWCo", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/index.hbs" } });
});
define("sampleapp/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Y2GIw6nK", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header col-lg-3\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse col-lg-9\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"about\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"contacts\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n            \"],[\"block\",[\"link-to\"],[\"reminders\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Reminders\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"style\",\"margin-left:30px;\"],[\"flush-element\"],[\"text\",\"Contacts\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Personal Manager\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/navbar.hbs" } });
});
define("sampleapp/templates/reminders", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TJ384FWB", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sampleapp/templates/reminders.hbs" } });
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
