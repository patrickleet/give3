Acts = new Meteor.Collection('acts', {
  schema: new SimpleSchema({
    description: {
      type: String,
      label: 'Description'
    },
    photoId: {
      type: String
    },
    userId: {
      type: String
    },
    username: {
      type: String
    },
    created: {
      type: Date
    }
  })
});


ActsFS = new CollectionFS('acts');
ActsFS.filter({
  allow: {
    contentTypes: ['image/*']
  }
});

Acts.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update:  function(userId, doc, fieldNames, modifier) {
    return !!userId;
  },
  remove:  function(userId, doc) {
    return !!userId;
  }
});

ActsFS.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update:  function(userId, doc, fieldNames, modifier) {
    return !!userId;
  },
  remove:  function(userId, doc) {
    return !!userId;
  }
});

Meteor.methods({
  inspire: function(actId) {
    Meteor.users.update({ _id: this.userId }, { $addToSet: { inspiredBy: actId } });
    Acts.update(actId, { $addToSet: { inspired: this.userId } }, { validate: false });
  }
});