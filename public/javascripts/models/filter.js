var Filter = Backbone.Model.extend({
  defaults: {
    query: '',
    categories: ['title', 'description'],
  },
  filter: function() {
    var query = this.get('query').trim();
    var models;
    var self = this;

    if (query.length > 2) {
      models = this.collection.filter(function(model) {
        return _.some(_.values(model.pick(self.get('categories'))), function(value) {
          return ~value.toLowerCase().indexOf(query);
        });
      });
    }

    this.results.reset(models);
  },
  initialize: function(options) {
    this.collection = options.collection;
    this.results = new Backbone.Collection();
    this.listenTo(this, 'change:query change:categories', this.filter.bind(this));
  }
});