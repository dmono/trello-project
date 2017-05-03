var Lists = Backbone.Collection.extend({
  url: '/lists',
  model: List,
  comparator: 'position',
  unarchive: function(listId) {
    this.get(listId).save({
      archived: false,
      position: this.where({ archived: false }).length + 1,
    }, {
      wait: true,
      success: function() {
        App.trigger('listModified');
      },
    });
  },
  updatePositions: function(listId, menuMove, position) {
    var lists = this.where({ archived: false }).sort(function(a, b) {
      return a.get('position') - b.get('position');
    });
    var list = this.get(listId);

    if (position) {
      lists = _.without(lists, list);
      lists.splice(position - 1, 0, list);
    }

    lists.forEach(function(list, idx) {
      list.save({ position: idx + 1 }, { wait: true });
    });

    if (menuMove) {
      App.trigger('listModified');
    }
  },
});
