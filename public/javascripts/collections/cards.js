var Cards = Backbone.Collection.extend({
  url: '/cards',
  model: Card,
  updateListId: function(id, newListId) {
    var card = this.get(id);
    card.save({ listId: +newListId });
  },
  addCard: function(title, listId) {
    var self = this;
    var position = this.filter(function(card) {
      card.get('listId') === listId;
    }).length + 1;

    var newCard = this.create({
      title: title,
      listId: +listId,
      position: position,
    }, { 
      wait: true,
      success: function(model, response) {
        App.trigger('renderNewCard', listId, model);
        App.trigger('cardMoved', listId)
      },
    });
  },
});