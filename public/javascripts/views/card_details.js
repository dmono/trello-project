var CardDetailsView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    'click a.close-modal': 'closeModal',
    'blur .header textarea': 'updateTitle',
    'click .save-description': 'updateDescription',
    'click a.close-description': 'closeDescriptionEdit',
    'click .display-edit': 'displayDescriptionEdit',
    'click .comment-controls input[type="submit"]': 'addComment',
    'click .labels-btn': 'displayLabels',
    'click .card-modal-label': 'displayLabels',
    'click .duedate-btn': 'displayDueDate',
    'click .card-modal-due-date a': 'displayDueDate',
    'click .move-btn': 'displayMove',
    'click .copy-btn': 'displayCopy',
    'click .current-list a': 'displayMove',
    'click .subscribe-btn': 'setSubscribe',
    'click .archive-btn': 'displayArchive',
  },
  closeModal: function(e) {
    if (e) { e.preventDefault() }
    this.remove();
    $('.modal-overlay').hide();
    router.navigate('', { trigger: true });
  },
  displayLabels: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger('viewLabels', this.model, offset, height);
  },
  displayDueDate: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger('viewDueDate', this.model, offset, height);
  },
  displayMove: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger('viewMoveCard', this.model, offset, height);
  },
  displayCopy: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger('viewCopyCard', this.model, offset, height);
  },
  setSubscribe: function(e) {
    e.preventDefault();
    this.model.save('subscribed', !this.model.get('subscribed'));
  },
  addComment: function(e) {
    e.preventDefault();
    var newComment = {};
    newComment.text = $(e.target).closest('.new-comment').find('textarea').val();

    if (newComment.text) {
      newComment.dateTime = new Date();
      newComment.user = 'Trello User';
      newComment.cardId = this.model.get('id');

      App.comments.create(newComment);
    }

    $(e.target).closest('.new-comment').find('textarea').val('');
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
    this.displayDescription();
    this.closeDescriptionEdit();
  },
  closeDescriptionEdit: function(e) {
    if (e) { e.preventDefault(); }

    this.$('.edit-description').hide();
    this.$('.description-text').show();
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
    this.$('.description-text').html(converter.makeHtml(this.model.get('description')));
  },
  displayModalLabels: function() {
    var labels = this.model.get('labels').map(function(labelId) {
      return App.labels.get(labelId).toJSON();
    });
    console.log(labels);
    this.$('.card-modal-labels').empty().append(App.templates.card_modal_labels({ labels: labels }));
  },
  displayModalDueDate: function() {
    var dueDate = moment(this.model.get('dueDate')).format('MMM D [at] h:mm A');
    this.$('.card-modal-due-date a').html(dueDate);
  },
  getCurrentList: function() {
    return App.lists.get(this.model.get('listId')).get('name');
  },
  renderComments: function() {
    var comments = App.comments.where({ cardId: this.model.id });
    var self = this;
    var commentView;

    this.$('.activity-content').empty();

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

    if (this.model.get('labels')) {
      this.displayModalLabels();
    }

    if (this.model.get('dueDate')) {
      this.displayModalDueDate();
    }

    this.renderComments(); 
    $('.modal-overlay').empty().append(this.el).css('display', 'flex');
  },
  initialize: function() {
    this.render();
    // this.listenTo(this.model, 'change', this.render.bind(this));
  }
});
