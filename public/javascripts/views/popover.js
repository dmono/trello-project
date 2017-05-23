var PopoverView = Backbone.View.extend({
  className: 'popover-wrapper',
  events: {
    'click .close-popover': 'close',
  },
  // next 3 methods used for move card and copy card actions
  setPositionList: function() {
    var listId = Number(this.$('#list-options').find(':selected').val());
    var $positionList = this.$('#position-options');

    $positionList.html(App.templates.move_card_positions({ positions: this.positionValues(listId)}));
  },
  listsValues: function() {
    var lists = [];
    var self = this;

    App.lists.each(function(list) {
      if (!list.get('archived')) {
        lists.push({
          name: list.get('name'),
          id: list.get('id'),
          selected: list.get('id') === self.model.get('listId'),
        });
      }
    });

    return lists;
  },
  positionValues: function(listId) {
    var offset = this.model.get('listId') === listId ? 1 : 2;

    return _.range(1, App.cards.where({ listId: listId }).length + offset);
  },
  setPlacement: function(elementOffset, elementHeight) {
    var minTopOffset = 25;
    var defautTopOffset = 100;
    var totalHeight = elementOffset.top + elementHeight + minTopOffset + this.$el.height();
    var windowHeight = $(window).height();
    var top = totalHeight > windowHeight ? defautTopOffset : elementOffset.top + elementHeight + minTopOffset;

    this.$el.parent().offset({
      top: top,
      left: elementOffset.left,
    });
  },
  close: function(e) {
    if (e) { e.preventDefault(); }

    this.$el.parent().offset({ top: 0, left: 0 }).hide();
    $('.popover-overlay').hide();
    this.remove();
  },
  showOverlay: function() {
    $('.popover-overlay').show();
  },
  showPopover: function() {
    $('.popover').empty().append(this.el);
    this.$el.parent().show();
    this.setPlacement(this.elementOffset, this.elementHeight);
  },
  initialize: function(options) {
    $('.popover-overlay').on('click', this.close.bind(this));
    this.elementOffset = options.offset;
    this.elementHeight = options.height;
    this.render();
  }
});