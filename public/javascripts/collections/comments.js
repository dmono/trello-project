var Comments = Backbone.Collection.extend({
  url: '/comments',
  model: Comment,
  comparator: function(comment) {
    var dateTime = new Date(comment.get('dateTime'));
    return -dateTime.getTime();
  },
  addComment: function(cardId, text) {
    this.create({
      createdAt: new Date(),
      user: 'Trello User',
      cardId: cardId,
      text: text,
    }, {
      wait: true,
      activityType: 'add comment',
    });
  },
});