var SearchView = Backbone.View.extend({
  template: App.templates.search,
  events: {
    'click .search-results a': 'close',
  },
  close: function() {
    $('.popover').removeClass('search-modal');
    this.remove();
  },
  formatResults: function() {
    var results = this.model.results.toJSON();
    this.model.results.each(function(result) {


    });
    
    return results;
  },
  render: function() {
    this.$el.html(this.template({ results: this.formatResults() }));
    $('.popover').addClass('search-modal');
    this.$el.appendTo('.popover');
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model.results, 'reset', this.render);
  }
});