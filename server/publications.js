Meteor.publish('allActs', function() {
	return Acts.find();
});

Meteor.publish('myActs', function() {
	return Acts.find({userId: this.userId});
});

Meteor.publish('singleAct', function(id) {
	return Acts.find(id);
})