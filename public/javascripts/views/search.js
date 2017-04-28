var SearchView = PopoverView.extend({
  template: App.templates.search,
  events: {
    'click .search-results a': 'closeSearch',
  },
  closeSearch: function() {
    App.trigger('closeSearch');
  },
  formatResults: function() {
    var results = this.model.results.toJSON();

    results.forEach(function(result) {
      result.listName = App.lists.get(result.listId).get('name');
    });

    return results;
  },
  render: function() {
    if (this.model.get('query').length > 2) {
      this.$el.html(this.template({ results: this.formatResults() }));
    } else {
      this.$el.html('<p>Please enter at least 3 characters to begin searching.</p>');
    }

    this.showPopover();
    this.delegateEvents();
  },
  initialize: function(options) {
    PopoverView.prototype.initialize.call(this, options);
    this.listenTo(this.model.results, 'reset', this.render);
  }
});
