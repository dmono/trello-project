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
    $('.add-new-card').filter(':hidden').show();
  },
  updateCardPositions: function(listId) {
    var cardPositions = this.$el.sortable('toArray', { attribute: 'data-id' });
    var position;

    App.trigger('cardMoved', listId);

    // this.collection.each(function(list) {
    //   position = listPositions.indexOf(String(list.id)) + 1;
    //   list.save({ position: position });
    // });
  },
  makeSortable: function() {
    var self = this;
    this.$el.sortable({
      items: '> div:not(.new-card-form)',
      connectWith: '.cards-container',
      placeholder: 'card-placeholder',
      tolerance: 'pointer',
      containment: 'window',
      zIndex: 9999,
      // appendTo: 'body',
      // helper: 'clone',
      start: function(e, ui) {
        ui.placeholder.width(ui.item.width());
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
          App.trigger('changeCardList', cardId, newListId);
          App.trigger('cardMoved', formerListId, cardId);
        }

        App.trigger('cardMoved', newListId, cardId);
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