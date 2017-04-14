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
      $('.add-list-form').hide();
      $('.add-list-placeholder').show();
      this.$('.overlay').hide();
    }
  },
  addNewList: function(e) {
    e.preventDefault();
    var $formData = $(e.target);
    App.trigger('addList', $formData);
  },
  updatePositions: function() {
    this.collection.listPositions = this.$('.sortable-lists').sortable('toArray', { attribute: 'data-id' });
  },
  makeSortable: function() {
    var self = this;
    this.$('.sortable-lists').sortable({
      placeholder: "list-placeholder",
      handle: ".list-header",
      tolerance: 'pointer',
      containment: 'window',
      appendTo: 'body',
      helper: 'clone',
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
    this.collection.each(this.renderList.bind(this));
  },
  renderList: function(item) {
    var listView = new ListView({
      model: item,
    });

    this.$('.sortable-lists').append(listView.el);
  },
  renderNewCard: function(listId, model) {
    this.collection.get(listId).view.cardsView.renderCard(model);
  },
  initialize: function() {
    this.render();
    this.makeSortable();
    this.collection.view = this;
  },
});