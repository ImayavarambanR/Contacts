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