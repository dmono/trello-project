var BoardView = Backbone.View.extend({
  el: $('main')[0],
  template: App.templates.board,
  events: {
    'click .add-list-placeholder': 'displayAddListForm',
    'submit form.add-list-form': 'addNewList',
    'click a.cancel-btn': 'closeAddListForm',
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
  displayAddListForm: function(e) {
    $(e.target).closest('div').hide();
    this.$('.add-list-form').slideDown(100);

    this.$('.overlay').show();
  },
  closeAddListForm: function(e) {
    e.preventDefault();

    if ($('.add-list-form').is(':visible')) {
      $('.add-list-form').find("input[name='name']").val('');
      $('.add-list-form').hide();
      $('.add-list-placeholder').show();
      this.$('.overlay').hide();
    }
  },
  updatePositions: function() {
    var listPositions = this.$('#board').sortable('toArray', { attribute: 'data-id' });
    var position;

    this.collection.each(function(list) {
      position = listPositions.indexOf(String(list.id)) + 1
      list.save({ position: position });
    });
  },
  makeSortable: function() {
    var self = this;
    this.$('#board').sortable({
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
  renderList: function(item) {
    var listView = new ListView({
      model: item,
    });

    this.$('.add-list').before(listView.el);
  },
  renderNewCard: function(listId, model) {
    this.collection.get(listId).view.cardsView.renderCard(model);
  },
  render: function() {
    this.$el.html(this.template());
    this.$('.list-wrapper').not('.add-list').remove();
    this.collection.each(this.renderList.bind(this));
  },
  initialize: function() {
    this.makeSortable();
    this.collection.view = this;
    this.listenTo(this.collection, 'add', this.render);
  },
});
