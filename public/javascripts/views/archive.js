var ArchivePopoverView = PopoverView.extend({
  template: App.templates.archive,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click .send-to-board': 'sendToBoard',
      'click .archived-cards': 'goToCard',
    });
  },
  sendToBoard: function(e) {
    e.preventDefault();
    var listId = $(e.currentTarget).attr('data-id');

    App.trigger('unarchiveList', listId);
    this.close();
  },
  goToCard: function() {
    this.close();
  },
  renderCard: function(card) {
    var cardView = new CardView({
      model: card,
    });

    this.$('.archived-cards').append(cardView.el);
  },
  render: function() {
    this.$el.html(this.template({ lists: this.lists }));
    this.cards.forEach(this.renderCard.bind(this));
    this.showOverlay();
    this.showPopover();
  },
  initialize: function(options) {
    this.lists = options.lists.map(function(list) { return list.toJSON() });
    this.cards = options.cards;
    PopoverView.prototype.initialize.call(this, options);
  }
});