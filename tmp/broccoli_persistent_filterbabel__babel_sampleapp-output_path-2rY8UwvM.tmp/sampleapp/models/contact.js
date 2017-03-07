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