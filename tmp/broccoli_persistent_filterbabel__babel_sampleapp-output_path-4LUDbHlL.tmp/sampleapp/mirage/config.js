define('sampleapp/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {
    this.namespace = '/api';

    var contacts = [{
      type: 'contacts',
      id: 'grand-old-mansion',
      attributes: {
        img: 'http://bootdey.com/img/Content/user_1.jpg',
        name: 'Imaya',
        phone: '9500881944',
        group: 'Family',
        fb: 'https://www.facebook.com/imaya.varamban.94',
        twitter: 'https://twitter.com/imayamsoft',
        linkedin: 'https://www.linkedin.com/in/imayavaramban-r-4505857b',
        email: "intellectualimay@gmail.com"
      }
    }, {
      type: 'contacts',
      id: 'grand-old-mansion',
      attributes: {
        img: 'http://bootdey.com/img/Content/user_2.jpg',
        name: 'Ilaiya',
        phone: '7373696660',
        group: 'Family',
        fb: 'https://www.facebook.com/intellectual.imay',
        twitter: 'https://twitter.com/imayamsoft',
        linkedin: 'https://www.linkedin.com/in/imayavaramban-r-4505857b',
        email: "karateimay@gmail.com"
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
  };
});