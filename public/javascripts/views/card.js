var CardView = Backbone.View.extend({
  template: App.templates.card,
  events: {
    'click': 'displayCardDetails',
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('class', 'card-wrapper');
    this.$el.attr('data-id', this.model.id);

    return this.el;
  },
  displayCardDetails: function(e) {
    e.preventDefault();

    var modal = new CardDetailsView({
      model: this.model,
    });
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  },
});