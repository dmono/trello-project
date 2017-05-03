var CardDetailsView = Backbone.View.extend({
  className: 'card-details-wrapper',
  template: App.templates.card_modal,
  events: {
    'click .close-modal': 'close',
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
    'click .archive-btn': 'archiveCard',
    'click .send-to-board-btn': 'sendToBoard',
    'click .card-modal-delete': 'deleteCard',
  },
  close: function(e) {
    if (e) { e.preventDefault() }
    App.trigger('closeModal');
  },
  triggerPopoverView: function(e, type) {
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger(type, this.model, offset, height);
  },
  displayLabels: function(e) {
    e.preventDefault();
    this.triggerPopoverView(e, 'viewLabels');
  },
  displayDueDate: function(e) {
    e.preventDefault();
    this.triggerPopoverView(e, 'viewDueDate');
  },
  displayMove: function(e) {
    e.preventDefault();
    this.triggerPopoverView(e, 'viewMoveCard');
  },
  displayCopy: function(e) {
    e.preventDefault();
    this.triggerPopoverView(e, 'viewCopyCard');
  },
  displayCopy: function(e) {
    e.preventDefault();
    this.triggerPopoverView(e, 'viewCopyCard');
  },
  setSubscribe: function(e) {
    e.preventDefault();
    var status = this.model.get('subscribed');
    this.model.save({ subscribed: !status }, { wait: true });
  },
  addComment: function(e) {
    e.preventDefault();
    var text = $(e.target).closest('.new-comment').find('textarea').val();

    if (text) {
      App.trigger('newComment', this.model.id, text);
      $(e.target).closest('.new-comment').find('textarea').val('');
      this.render();
    }
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
    this.model.save({ description: $textarea.val() }, { wait: true });

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

    this.$('.card-modal-labels').empty().append(App.templates.card_modal_labels({ labels: labels }));
  },
  displayModalDueDate: function() {
    var dueDate = moment(this.model.get('dueDate')).format('MMM D [at] h:mm A');
    this.$('.card-modal-due-date a').html(dueDate);
  },
  archiveCard: function(e) {
    e.preventDefault();
    this.model.save({ 'archived': true }, {
      wait: true,
      activityType: 'archived',
      success: function(model) {
        App.trigger('cardMoved', model.get('listId'), model.id);
      }
    });
  },
  sendToBoard: function(e) {
    e.preventDefault();
    this.model.save({
      archived: false,
      position: App.cards.where({ listId: this.model.get('listId') }).length + 1,
    }, {
      wait: true,
      activityType: 'unarchived',
    });
  },
  deleteCard: function(e) {
    e.preventDefault();
    this.model.destroy({
      wait: true,
      success: function(model) {
        console.log(model);
      }
     });
    this.close();
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
  },
  initialize: function(options) {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(App.comments, 'update', this.render);
    this.listenTo(App.labels, 'change update', this.render);
    this.render();
  }
});
