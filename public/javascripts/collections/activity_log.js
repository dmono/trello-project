var ActivityLog = Backbone.Collection.extend({
  model: Activity,
  url: '/activity',
  addToLog: function(model, newValue, options, cards) {
    var cardId = options.activityType === 'add comment' ? model.get('cardId') : model.id;
    var cardTitle = cards.get(cardId).get('title');
    var listName;

    if (options.listId) {
      listName = App.lists.get(options.listId).get('name');
    }

    this.create({
      user: 'Trello User',
      type: options.activityType,
      createdAt: new Date(),
      cardTitle: cardTitle,
      cardId: cardId,
      listName: listName,
    }, {
      wait: true,
    });
  },
});