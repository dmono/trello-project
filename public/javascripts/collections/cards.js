var Cards = Backbone.Collection.extend({
  url: '/cards',
  model: Card,
  updateListId: function(id, newListId) {
    var card = this.get(id);
    card.save({ listId: +newListId });
  },
  updatePositions: function(listId, cardId, menuMove, position) {
    var cards = this.where({ listId: Number(listId) }).sort(function(a, b) {
      return a.get('position') - b.get('position');
    });
    var model = this.get(cardId);

    if (position) {
      cards = _.without(cards, model);
      cards.splice(position - 1, 0, model);
    }

    cards.forEach(function(card, idx) {
      card.save({ position: idx + 1 });
    });

    if (menuMove) {
      App.trigger('cardsModified');
    }
  },
  addCard: function(title, listId) {
    var position = this.where({ listId: Number(listId) }).length + 1;

    this.create({
      title: title,
      listId: Number(listId),
      position: position,
    }, { 
      success: function() {
        App.trigger('cardsModified');
      },
    });
  },
});