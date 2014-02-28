Template.discover.helpers({
  acts: function() {
    return Acts.find();
  }
});

Template.act.helpers({
  file: function () {
    return ActsFS.findOne({ _id: this.photoId });
  },
  username: function () {
    var user = Meteor.user();
    return user.emails && user.emails.length ? user.emails[0].address : new Error('dont know facebook login stuff yet');
  }
});