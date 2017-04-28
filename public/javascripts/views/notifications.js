var NotificationsView = PopoverView.extend({
  template: App.templates.notifications,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click a': 'closePopover',
    });
  },
  close: function(e) {
    PopoverView.prototype.close.call(this);
    $('.popover').removeClass('notification-modal');
  },
  closePopover: function() {
    this.close();
  },
  render: function() {
    this.$el.html(this.template({ activity: this.collection.formatData() }));
    this.showPopover();
  },
});