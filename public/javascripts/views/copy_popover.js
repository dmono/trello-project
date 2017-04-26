var CopyPopoverView = PopoverView.extend({
  template: App.templates.copy_card,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'change #list-options': 'setPositionList',
      'click input[type="submit"]': 'copyCard',
    });
  },
  copyCard: function() {
    var listId = this.$('#list-options').find(':selected').val();
    var position = Number(this.$('#position-options').find(':selected').val());
    var title = this.$('textarea').val();

    App.trigger('cardCopied', this.model, listId, position, title);
    this.close();
  },
  render: function() {
    this.$el.html(this.template({ lists: this.listsValues() }));
    this.$('textarea').text(this.model.get('title'));
    this.setPositionList();
    this.showPopover();
  },
});