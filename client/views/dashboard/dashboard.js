Template.dashboard.helpers({
  username: function() {
    var user = Meteor.user();
    var username = user.emails[0].address;
    return username;
  },
  acts: function() {
    return Acts.find({userId: Meteor.userId()});
  },
  inspirations: function () {
  	return Acts.find({ _id: { $in: Meteor.user().inspiredBy } });
  }
});