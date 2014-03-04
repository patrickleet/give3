Template.act.helpers({
  timeAgo: function() {
    return moment(this.created).fromNow();
  }
});