Template.act.helpers({
  username: function () {
    var user = Meteor.user();
    return user.emails && user.emails.length ? user.emails[0].address : new Error('dont know facebook login stuff yet');
  },
  timeAgo: function() {
    return moment(this.created).fromNow();
  }
});

Template.act.events({
  'click .inspire': function (event, template) {
    var id = template.data.act._id;
    Meteor.call('inspire', id, function (error, result) {});
  }
});