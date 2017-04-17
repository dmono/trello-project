var CardDetailsView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    'click a.icon-cancel': 'closeModal',
    'blur .header textarea': 'updateTitle',
    'click .description-controls input[type="submit"]': 'updateDescription',
    'click .description a': 'displayDescriptionEdit',
    'click .cancel-btn': 'render',
    'click .comment-controls input[type="submit"]': 'addComment',
    'click .labels-btn': 'displayLabelsMenu',
    'click .duedate-btn': 'displayDueDateMenu',
  },
  closeModal: function(e) {
    e.preventDefault();
    this.remove();
    $('.modal-overlay').hide();
  },
  displayLabelsMenu: function(e) {
    e.preventDefault();

    var labelsView = new LabelsPopoverView({
      model: this.model,
    });
  },
  displayDueDateMenu: function(e) {
    e.preventDefault();

    var dueDateView = new DueDatePopoverView({
      model: this.model,
    });
  },
  addComment: function(e) {
    e.preventDefault();
    var newComment = {};
    newComment.text = $(e.target).closest('.new-comment').find('textarea').val();
    newComment.dateTime = new Date();
    newComment.user = 'Trello User';
    newComment.cardId = this.model.get('id');

    App.comments.create(newComment);
  },
  updateTitle: function(e) {
    var input = $(e.target).val();
    if (input && input !== this.model.get('title')) {
      this.model.save({ title: input });
    }
  },
  updateDescription: function(e) {
    e.preventDefault();
    var $textarea = $(e.target).closest('.edit-description').find('textarea');
    this.model.save({ description: $textarea.val() });
    $textarea.val('');
    this.render();
  },
  displayDescriptionEdit: function(e) {
    e.preventDefault();

    if ($(e.target).hasClass('empty-description')) {
      $(e.target).hide();
      this.$('.edit-description').show();
    } else {
      this.$('.description-text').hide();
      this.$('.edit-description').find('textarea').val(this.model.get('description'));
      this.$('.edit-description').show();
    }
  },
  displayDescription: function() {
    // using Showdown - markdown to HTML converter
    var converter = new showdown.Converter();
    $('.description-text').html(converter.makeHtml(this.model.get('description')));
  },
  getCurrentList: function() {
    return App.lists.get(this.model.get('listId')).get('name');
  },
  renderComments: function() {
    var comments = App.comments.where({ cardId: this.model.id });
    var self = this;
    var commentView;

    comments.forEach(function(comment) {
      commentView = new CommentView({
        model: comment,
      });

      self.$('.activity-content').append(commentView.el);
    });
  },
  render: function() {
    this.$el.html(App.templates.card_modal(this.model.toJSON()));
    this.$el.addClass('card-details-modal');
    this.$('.current-list a').html(this.getCurrentList());

    if (this.model.get('description')) {
      this.displayDescription();
    }

    this.renderComments(); 
    $('.modal-overlay').empty().append(this.el).css('display', 'flex');
  },
  initialize: function() {
    this.render();
    this.listenTo(App.comments, 'all', this.render.bind(this));
  }
});