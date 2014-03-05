Template.discover.helpers({
  thereAreActs: function() {
    return Acts.find().count() > 0;
  },
  acts: function() {
    return Acts.find();
  }
});