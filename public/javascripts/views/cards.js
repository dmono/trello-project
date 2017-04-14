var CardsView = Backbone.View.extend({
  events: {
    'click .submit-btn': 'addCard',
    'click .cancel-btn': 'closeForm',
  },
  addCard: function(e) {
    e.preventDefault();
    var title = $(e.target).parent().parent().find('textarea').val();
    var listId = $(e.target).parent().parent().closest('.list-wrapper').attr('data-id');
    App.trigger('addNewCard', title, listId);
  },
  closeForm: function(e) {
    //e.preventDefault();
    $('.new-card-form').filter(':visible').find('textarea').val('');
    $('.new-card-form').filter(':visible').hide();
    //$(e.target).closest('.new-card-form').hide();
    $('.add-new-card').filter(':hidden').show();
  },
  makeSortable: function() {
    var self = this;
    this.$el.sortable({
      connectWith: '.cards-container',
      placeholder: 'card-placeholder',
      tolerance: 'pointer',
      containment: 'window',
      appendTo: 'body',
      helper: 'clone',
      start: function(e, ui) {
        ui.placeholder.height(ui.item.height());
        ui.item.addClass('tilt');
      },
      stop: function(e, ui) {
        ui.item.removeClass('tilt');
      },
      update: function(e, ui) {
        var newListId = ui.item.closest('.list-wrapper').attr('data-id');
        var cardId = ui.item.attr('data-id');
        var formerListId;

        if (ui.sender) {
          formerListId = ui.sender.closest('.list-wrapper').attr('data-id');
          App.trigger('cardMoved', formerListId);
          App.trigger('changeCardList', cardId, newListId);
        }

        App.trigger('cardMoved', newListId);
      },
    }).disableSelection();
  },
  render: function() {
    this.$el.append(App.templates.newCard());
    this.collection.forEach(this.renderCard.bind(this));
    this.$el.attr('class', 'cards-container');
  },
  renderCard: function(card) {
    var cardView = new CardView({
      model: card,
    });

    this.$('.new-card-form').before(cardView.el);
  },
  initialize: function() {
    this.render();
    this.makeSortable();
    this.listenTo(App.cards, 'add', this.closeForm);
  },
});