var ListPopoverView = PopoverView.extend({
  template: App.templates.list_actions,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click .list-archive': 'archive',
    });
  },
  archive: function(e) {
    e.preventDefault();
    var self = this;

    this.model.save({ archived: true }, {
      wait: true,
      success: function(list) {
        App.trigger('listMoved', list.id, true);
        self.close();
      }
    });
  },
  render: function() {
    this.$el.html(this.template());
    this.showOverlay();
    this.showPopover();
  },
});