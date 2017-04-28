var CardView = Backbone.View.extend({
  template: App.templates.card,
  getData: function() {
    var data = this.model.toJSON();

    if (this.model.get('labels')) {
      data.labels = data.labels.map(function(labelId) {
        return App.labels.get(labelId).toJSON();
      });
    }
    
    data.comments = App.comments.where({ cardId: this.model.id }).length;

    return data;
  },
  render: function() {
    this.$el.html(this.template(this.getData()));
    this.$el.attr('class', 'card-wrapper');
    this.$el.attr('data-id', this.model.id);

    return this.el;
  },
  initialize: function() {
    this.render();
  },
});