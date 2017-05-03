var BoardView = Backbone.View.extend({
  className: 'board-wrapper',
  template: App.templates.board,
  events: {
    'click .add-list-placeholder': 'displayAddListForm',
    'submit form.add-list-form': 'addNewList',
    'click a.cancel-btn': 'closeAddListForm',
    'click .board-archive': 'displayArchive',
  },
  displayArchive: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    offset.left -= 183;

    App.trigger('viewArchive', offset, height);
  },
  addNewList: function(e) {
    e.preventDefault();
    var self = this;
    var name = $(e.target).find("input[name='name']").val();
    var newPosition = this.collection.length + 1;

    this.collection.create({
      name: name,
      position: newPosition,
      archived: false,
    }, { 
      wait: true,
      success: function() {
        self.$('a.cancel-btn').trigger('click');
      },
    });
  },
  displayAddListForm: function(e) {
    $(e.target).closest('div').hide();
    this.$('.add-list-form').slideDown(100);
    this.$('.add-list-form > input').focus();
  },
  closeAddListForm: function(e) {
    e.preventDefault();
    this.$('.add-list-form').find("input[name='name']").val('');
    this.$('.add-list-form').slideUp(100);
    this.$('.add-list-placeholder').delay(100).show(0);
  },
  makeSortable: function() {
    var self = this;
    var sortableList = this.$('#board');

    sortableList.sortable({
      items: '> div:not(.add-list)',
      placeholder: 'list-placeholder',
      handle: '.list-header',
      tolerance: 'pointer',
      containment: 'window',
      appendTo: 'body',
      zIndex: 9999,
      helper: 'clone',
      start: function(e, ui) {
        ui.placeholder.height(ui.helper.find('.list').height());
        ui.helper.addClass('tilt');
      },
      update: function(e, ui) {
        var listId = ui.item.attr('data-id');
        var newPositions = sortableList.sortable('toArray', { attribute: 'data-id' });
        var position = _.indexOf(newPositions, listId) + 1;

        self.collection.updatePositions(listId, false, position);
      },
    }).disableSelection();
  },
  renderList: function(item) {
    if (!item.get('archived')) {
      var listView = new ListView({
        model: item,
      });

      this.$('.add-list').before(listView.el);
    }
  },
  render: function() {
    this.$el.html(this.template());
    this.$('.list-wrapper').not('.add-list').remove();
    this.collection.forEach(this.renderList.bind(this));
    this.makeSortable();
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },
});
