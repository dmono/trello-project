var BoardView = Backbone.View.extend({
  el: $('.board-header')[0],
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});

