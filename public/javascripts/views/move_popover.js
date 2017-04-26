var MovePopoverView = PopoverView.extend({
  template: App.templates.move_card,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'change #list-options': 'setPositionList',
      'click input[type="submit"]': 'moveCard',
    });
  },
  moveCard: function() {
    var formerListId = this.model.get('listId');
    var listId = this.$('#list-options').find(':selected').val();
    var position = Number(this.$('#position-options').find(':selected').val());

    if (formerListId !== listId) {
      var self = this;
      this.model.save({
        listId: Number(listId)
      }, {
        success: function() {
          App.trigger('cardMoved', formerListId, self.model.id, true);
        },
      });
    }

    App.trigger('cardMoved', listId, this.model.id, true, position);
    this.close();
  },
  render: function() {
    this.$el.html(this.template({ lists: this.listsValues() }));
    this.setPositionList();
    this.showPopover();
  },
});