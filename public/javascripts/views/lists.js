var ListsView = Backbone.View.extend({
  el: $('#board')[0],
  events: {
    'click .add-list-placeholder': 'displayForm',
    'submit form.add-list-form': 'addNewList',
    'click a.cancel-btn': 'closeForm',
    'click .overlay': 'closeForm',
  },
  displayForm: function(e) {
    $(e.target).closest('div').hide();
    this.$('.add-list-form').slideDown(100);

    this.$('.overlay').show();
  },
  closeForm: function(e) {
    e.preventDefault();

    if ($('.add-list-form').is(':visible')) {
      $('.add-list-form').find("input[name='name']").val('');
      $('.add-list-form').hide();
      $('.add-list-placeholder').show();
      this.$('.overlay').hide();
    }
  },
  addNewList: function(e) {
    e.preventDefault();
    var self = this;
    var name = $(e.target).find("input[name='name']").val();
    var newPosition = this.collection.length + 1;

    this.collection.create({
      name: name,
      position: newPosition,
    }, { 
      wait: true,
      success: function(list, response) {
        self.$('a.cancel-btn').trigger('click');
      },
    });
  },
  updatePositions: function() {
    var listPositions = this.$el.sortable('toArray', { attribute: 'data-id' });
    var position;

    this.collection.each(function(list) {
      position = listPositions.indexOf(String(list.id)) + 1
      list.save({ position: position });
    });
  },
  makeSortable: function() {
    var self = this;
    this.$el.sortable({
      items: '> div:not(.add-list)',
      placeholder: 'list-placeholder',
      handle: '.list-header',
      tolerance: 'pointer',
      containment: 'window',
      appendTo: 'body',
      zIndex: 9999,
      // helper: 'clone',
      start: function(e, ui) {
        ui.placeholder.height(ui.item.find('.list').height());
        ui.item.addClass('tilt');
      },
      stop: function(e, ui) {
        ui.item.removeClass('tilt');
      },
      update: function(e, ui) {
        self.updatePositions();
      },
    }).disableSelection();
  },
  render: function() {
    this.$('.list-wrapper').not('.add-list').remove();
    this.collection.each(this.renderList.bind(this));
  },
  renderList: function(item) {
    var listView = new ListView({
      model: item,
    });
    console.log(this);
    this.$('.add-list').before(listView.el);
  },
  renderNewCard: function(listId, model) {
    this.collection.get(listId).view.cardsView.renderCard(model);
  },
  initialize: function() {
    this.render();
    this.makeSortable();
    this.collection.view = this;
    this.listenTo(this.collection, 'add', this.render);
  },
});