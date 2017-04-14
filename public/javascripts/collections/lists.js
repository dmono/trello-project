var Lists = Backbone.Collection.extend({
  url: '/lists',
  model: List,
  addList: function($formData) {
    var self = this;
    var data = $formData.serialize();
    
    $.ajax({
      url: $formData.attr('action'),
      type: $formData.attr('method'),
      data: $formData.serialize(),
      success: function(json) {
        self.view.renderList(self.add(json));
        self.view.$('a.cancel-btn').trigger('click');
      },
    });
  },
  updateCardPositions: function(listId) {
    var selectedList = $('.list-wrapper').filter(function() {
      return $(this).attr('data-id') === listId;
    });

    var cardOrder = selectedList.find('.card-wrapper').map(function() {
      return $(this).attr('data-id');
    }).toArray();

    App.lists.findWhere({ id: +listId }).set('cardPositions', cardOrder);
  },
});

