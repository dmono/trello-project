var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  el: $('#surface > header')[0],
  events: {
    'click input[name="search"]': 'displaySearch',
    'click .close-search': 'closeSearch',
    'keyup input[name="search"]': 'search',
  },
  search: _.throttle(function(e) {
    this.trigger('performSearch', e.currentTarget.value);
  }, 200),
  displaySearch: function() {
    this.$('.search-field').addClass('search-field-wide');
    this.$('span.icon-search').hide();
    this.$('span.close-search').show();

    this.trigger('openSearch');
  },
  closeSearch: function() {
    this.resetSearchField();
    this.$('span.close-search').hide();
    this.$('span.icon-search').show();

    this.trigger('closeSearch');
  },
  resetSearchField: function() {
    this.$("input[name='search']").val('');
    this.$('.search-field').removeClass('search-field-wide');
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  },
});