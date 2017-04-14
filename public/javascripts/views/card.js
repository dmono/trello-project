var CardView = Backbone.View.extend({
  template: App.templates.card,
  events: {
    //'click': 'testme',
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('class', 'card-wrapper');
    this.$el.attr('data-id', this.model.id);

    return this.el;
  },
  testme: function() {
    console.log(this);
    console.log(this.model.id);
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  },
});