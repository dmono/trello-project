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
  makeSortable: function() {
    this.$el.sortable({
      cancel: '.add-list',
      placeholder: "list-placeholder",
      handle: ".list-header",
      tolerance: 'pointer',
      containment: 'window',
      start: function(e, ui) {
        ui.placeholder.height(ui.item.find('.list').height());
        ui.item.addClass('tilt');
      },
      stop: function(e, ui) {
        ui.item.removeClass('tilt');
      }
    }).disableSelection();
  },
  render: function() {
    this.collection.each(this.renderList.bind(this));
  },
  renderList: function(item) {
    var listView = new ListView({
      model: item,
    });

    this.$('.add-list').before(listView.el)
  },
  initialize: function() {
    this.render();
    this.makeSortable();
  },
});