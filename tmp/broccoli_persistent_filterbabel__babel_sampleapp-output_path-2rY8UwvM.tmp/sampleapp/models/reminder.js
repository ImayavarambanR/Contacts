define('sampleapp/models/reminder', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    purpose: _emberData['default'].attr(),
    date: _emberData['default'].attr(),
    time: _emberData['default'].attr(),
    desc: _emberData['default'].attr(),
    type: _emberData['default'].attr()
  });
});