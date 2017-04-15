var CardDetailsView = Backbone.View.extend({
  el: $('.card-details-modal')[0],
  template: App.templates.card_modal,
  events: {
    'click a.icon-cancel': 'closeModal',
    'blur .header textarea': 'updateTitle',
    'click .description-controls input[type="submit"]': 'updateDescription',
  },
  closeModal: function(e) {
    e.preventDefault();
    $('.modal-overlay').css('display', 'none');
    this.$el.hide();
  },
  updateTitle: function(e) {
    var input = $(e.target).val();
    if (input !== this.model.get('title')) {
      this.model.save({ title: input });
    }
  },
  updateDescription: function(e) {
    e.preventDefault();
    var $textarea = $(e.target).closest('.edit-description').find('textarea');
    this.model.save({ description: $textarea.val() });
    $textarea.val('');
  },
  render: function() {
    this.$el.empty().append(App.templates.card_modal(this.model.toJSON()));
    $('.modal-overlay').css('display', 'flex');
    this.$el.show();
  },
  initialize: function() {
    this.render();
  }
});