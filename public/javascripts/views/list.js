var ListView = Backbone.View.extend({
  template: App.templates.list,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('class', 'list-wrapper');

    return this.el;
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  }
});