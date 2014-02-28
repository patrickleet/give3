Acts = new Meteor.Collection('acts');

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