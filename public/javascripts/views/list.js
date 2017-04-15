var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add-new-card': 'displayAddCardForm',
  },
  displayAddCardForm: function(e) {
    e.preventDefault();
    $('.add-new-card').show();
    $('.new-card-form').hide()

    $(e.target).hide();
    this.$('.new-card-form').show()
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('class', 'list-wrapper');
    this.$el.attr('data-id', this.model.id);
    this.insertCards();

    return this.el;
  },
  insertCards: function() {
    this.cardsView = new CardsView({
      collection: this.getListCards(),
    });

    this.$('.list-header').after(this.cardsView.el);
  },
  getListCards: function() {
    var listId = +this.$el.attr('data-id');
    var listCards = [];

    this.model.get('cardPositions').forEach(function(id) {
      listCards.push(App.cards.findWhere({
        listId: listId,
        id: +id,
      }));
    });

    return listCards;
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  }
});