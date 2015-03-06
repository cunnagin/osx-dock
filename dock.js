if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.setDefault("dragon", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.dock.helpers({
    dragon: function() {
      return Session.get("dragon");
    }
  });

  Template.dock.events({
    'click .app': function(e) {
      // increment the counter when button is clicked
      var s=e.currentTarget.id;
      console.log('You clicked Dragon # ',s);
      Session.set("dragon", s);
      $('#dragonexit').trigger('click');
    }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
