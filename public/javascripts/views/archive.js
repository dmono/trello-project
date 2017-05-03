var ArchivePopoverView = PopoverView.extend({
  template: App.templates.archive,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click .send-to-board': 'sendToBoard',
    });
  },
  sendToBoard: function(e) {
    e.preventDefault();
    var listId = $(e.currentTarget).attr('data-id');

    App.trigger('unarchiveList', listId);
    this.close();
  },
  render: function() {
    this.$el.html(this.template({ lists: this.lists }));
    this.showOverlay();
    this.showPopover();
  },
  initialize: function(options) {
    this.lists = options.lists.map(function(list) { return list.toJSON() });
    this.cards = options.cards.map(function(card) { return card.toJSON() });;
    PopoverView.prototype.initialize.call(this, options);
  }
});