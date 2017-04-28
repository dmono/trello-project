var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add-new-card': 'displayAddCardForm',
    'blur .list-name textarea': 'updateName',
  },
  updateName: function(e) {
    var text = $(e.target).val();

    if (text) {
      this.model.save({ name: text });
    }

    this.$('.header-draggable').show();
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
    return App.cards.where({ 
      listId: this.model.get('id'),
      archived: false,
    }).sort(function(a, b) {
      return a.get('position') - b.get('position');
    });
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  }
});