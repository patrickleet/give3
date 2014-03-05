Template.act.helpers({
  timeAgo: function() {
    return moment(this.created).fromNow();
  },
  inspiredBy: function () {
  	var actId = this._id;
  	var inspiredByAct = Meteor.user().inspiredBy && Meteor.user().inspiredBy.indexOf(actId) > -1
  	return (inspiredByAct) ? 'inspiredBy' : '';
  }
});

Template.act.events({
  'click .inspire': function (event, template) {
    var id = template.data.act._id;
    Meteor.call('inspire', id, function (error, result) {});
  }
});