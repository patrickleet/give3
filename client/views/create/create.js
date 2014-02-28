Template.create.helpers({
  actSchema: function() {
    var actsForm = new AutoForm(Acts);
    return actsForm;
  }
});

Template.create.events({
  'change .photoUploader': function(event, template) {
    debugger;
    var userId = Meteor.userId();
    var files = event.target.files,
        meta = {
          owner: userId
        };

    var photoField = $(template.find('[name=photoId]'));

    if (files.length) {
        var file = files[0];
        file.metadata = meta;
        var fsFile = ActsFS.insert(file, function(err, id) {
          if (err) throw new Meteor.Meteor.Error(500, 'Error 500: Something', err);
        });

        photoField.val(fsFile._id);
    }
  }
});