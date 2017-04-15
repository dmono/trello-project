var Lists = Backbone.Collection.extend({
  url: '/lists',
  model: List,
  comparator: 'position',
  updateCardPositions: function(listId) {
    var selectedList = $('.list-wrapper').filter(function() {
      return $(this).attr('data-id') === listId;
    });

    var cardOrder = selectedList.find('.card-wrapper').map(function() {
      return $(this).attr('data-id');
    }).toArray();

    App.lists.findWhere({ id: +listId }).save({ cardPositions: cardOrder });
  },
});

