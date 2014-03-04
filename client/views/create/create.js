Template.create.helpers({
  actSchema: function() {
    var actsForm = new AutoForm(Acts);
    actsForm.hooks({
      before: {
        insert: function(doc) {
          var user = Meteor.user();
          doc.userId = user._id;
          doc.username = user.emails[0].address || 'someone from facebook';
          doc.created = new Date();
          return doc;
        }
      }
    });
    return actsForm;
  }
});


// Template.create.image = function() {
//   return ActsFS;
// };

// Template.create.metadata = {
//   userId: Meteor.userId()
// };

Template.create.events({
  'change .photoUploader': function(event, template) {
    var userId = Meteor.userId();
    var files = event.target.files,
        meta = {
          owner: userId
        };

    var photoField = $(template.find('[name=photoId]'));

    if (files.length) {
        var file = files[0];
        file.metadata = meta;
        var fsFile = ActsFS.storeFile(file, meta, function(err, id) {
          if (err) throw new Meteor.Meteor.Error(500, 'Error 500: Something', err);
        });

        photoField.val(fsFile);
    }
  }
});