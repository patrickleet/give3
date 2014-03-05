Meteor.publish('allActs', function() {
	return Acts.find();
});

Meteor.publish('myActs', function() {
	return Acts.find({userId: this.userId});
});

Meteor.publish('singleAct', function(id) {
	return Acts.find(id);
});

Meteor.publish(null, function () {
	var criteria = { _id: this.userId };
	var fields = { inspiredBy: 1};
	var user = Meteor.users.findOne(criteria);
	if (user && user.inspiredBy) {
		return Meteor.users.find(criteria, { fields: fields });
	}
});