var MovePopoverView = PopoverView.extend({
  template: App.templates.move_card,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'change #list-options': 'setPositionList',
      'click input[type="submit"]': 'moveCard',
    });
  },
  moveCard: function(e) {
    var listId = this.$('#list-options').find(':selected').val();
    var position = this.$('#position-options').find(':selected').val();
    this.model.save({
      listId: Number(listId),
      position: Number(position),
    });

    this.close();
    App.trigger('cardMoved');
  },
  setPositionList: function() {
    var list = App.lists.get(this.$('#list-options').find(':selected').val());
    var $positionList = this.$('#position-options');

    $positionList.html(App.templates.move_card_positions({ positions: this.positionValues(list)}));
  },
  listsValues: function() {
    var lists = [];
    var self = this;

    App.lists.each(function(list) {
      lists.push({
        name: list.get('name'),
        id: list.get('id'),
        selected: list.get('id') === self.model.get('listId'),
      });
    });
    console.log(lists);
    return lists;
  },
  positionValues: function(list) {
    return _.range(list.get('cardPositions').length + 1).map(function(num) {
      return num + 1;
    });
  },
  render: function() {
    this.$el.html(this.template({ lists: this.listsValues() }));
    this.setPositionList();
    this.showPopover();
  },
});