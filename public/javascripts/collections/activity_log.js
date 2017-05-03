var ActivityLog = Backbone.Collection.extend({
  model: Activity,
  url: '/activity',
  addToLog: function(model, newValue, options, cards) {
    var cardId = options.activityType === 'add comment' ? model.get('cardId') : model.id;
    var cardTitle = cards.get(cardId).get('title');

    this.create({
      user: 'Trello User',
      type: options.activityType,
      createdAt: new Date(),
      cardTitle: cardTitle,
      cardId: cardId,
      listId: model.get('listId'),
    });
  },
  formatData: function() {
    var data = this.toJSON();

    data.forEach(function(activity) {
      if (activity.type = 'add comment') {
        data.text = 'commented';
      } else if (activity.type === 'changed due date') {
        data.text = 'changed the due date';
        data.dueDate = App.cards.get(activity.cardId).get('dueDate');
      } else if (activity.type === 'removed due date') {
        data.text = 'removed the due date';
      } else if (activity.type === 'archived') {
        data.text = 'archived';
      } else if (activity.type === 'moved card') {
        data.text = 'moved';
        data.listName = App.lists.get(activity.listId).get('name');
      }
    });

    return data;
  },
});