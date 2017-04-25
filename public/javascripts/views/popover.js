var PopoverView = Backbone.View.extend({
  className: 'popover-wrapper',
  events: {
    'click .close-popover': 'close',
  },
  setPosition: function(elementOffset, elementHeight) {
    var totalHeight = elementOffset.top + elementHeight + 25 + this.$el.height();
    var windowHeight = $(window).height();
    var top = totalHeight > windowHeight ? 100 : elementOffset.top + elementHeight + 25;

    this.$el.parent().offset({
      top: top,
      left: elementOffset.left,
    });
  },
  close: function(e) {
    if (e) { e.preventDefault(); }
    this.$el.parent().offset({ top: 0, left: 0 }).hide();
    this.remove();
  },
  showPopover: function() {
    $('.popover').empty().append(this.el);
    this.$el.parent().show();
    this.setPosition(this.elementOffset, this.elementHeight);
  },
  initialize: function(options) {
    this.elementOffset = options.offset;
    this.elementHeight = options.height;
    this.render();
  }
});