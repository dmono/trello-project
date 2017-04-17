var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  events: {
    'click .edit-comment': 'editComment',
    'click .delete-comment': 'deleteComment',
  },
  editComment: function(e) {
    e.preventDefault();

  },
  deleteComment: function(e) {
    e.preventDefault();
    this.model.destroy();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.addClass('comment-single');

    return this.el;
  },
  initialize: function() {
    this.render();
  }
});