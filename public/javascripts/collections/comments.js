var Comments = Backbone.Collection.extend({
  url: '/comments',
  model: Comment,
  comparator: function(comment) {
    var dateTime = new Date(comment.get('dateTime'));
    return -dateTime.getTime();
  }
});