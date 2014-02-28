Acts = new Meteor.Collection('acts', {
  schema: new SimpleSchema({
    description: {
      type: String,
      label: 'Description'
    },
    photoId: {
      type: String
    }
  })
});

var gridFSStore = new FS.Store.GridFS("acts", {
  // before - for image manipulation
});
ActsFS = new FS.Collection('acts', {
  stores: [gridFSStore],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
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
  createActOfKindness: function() {
    console.log('create act of kindness');
  }
})