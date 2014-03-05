Template.act.helpers({
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