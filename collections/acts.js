Acts = new Meteor.Collection('acts');
ActsFS = new FS.Collection('acts', {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
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