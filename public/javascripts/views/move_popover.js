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
  setPositionList: function() {
    var listId = Number(this.$('#list-options').find(':selected').val());
    var $positionList = this.$('#position-options');

    $positionList.html(App.templates.move_card_positions({ positions: this.positionValues(listId)}));
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

    return lists;
  },
  positionValues: function(listId) {
    var offset = this.model.get('listId') === listId ? 1 : 2;

    return _.range(1, App.cards.where({ listId: listId }).length + offset);
  },
  render: function() {
    this.$el.html(this.template({ lists: this.listsValues() }));
    this.setPositionList();
    this.showPopover();
  },
});