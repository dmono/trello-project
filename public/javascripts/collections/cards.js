var Cards = Backbone.Collection.extend({
  url: '/cards',
  model: Card,
  updateListId: function(id, newListId) {
    var card = this.get(id);
    card.save({ listId: +newListId });
  },
  addCard: function(title, listId) {
    var self = this;

    var newCard = this.create({
      title: title,
      listId: +listId, 
    }, { 
      wait: true,
      success: function(model, response) {
        App.trigger('renderNewCard', listId, model);
      },
    });
  },
});