var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  el: $('#surface > header')[0],
  events: {
    'click input[name="search"]': 'updateSearchField',
    'click .close-search': 'closeSearch',
    'keyup input[name="search"]': 'search',
    'click .notifications-btn': 'displayNotifications',
  },
  displayNotifications: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    offset.left -= 421;

    App.trigger('viewNotifications', offset, height);
    $(e.currentTarget).toggleClass('notify-alert');
  },
  notificationsAlert: function() {
    this.$('.notifications-btn').toggleClass('notify-alert');
  },
  search: function(e) {
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    if ($(e.currentTarget).val().length > 2 && $('.popover:hidden')) {
      this.trigger('openSearch', offset, height);
    }

    this.trigger('performSearch', e.currentTarget.value);
  },
  updateSearchField: function(e) {
    var $field = $(e.currentTarget);

    $field.addClass('search-field-wide');
    $field.attr('placeholder', 'Search by card title');
    this.$('span.icon-search').hide();
    this.$('span.close-search').show();
  },
  closeSearch: function() {
    App.trigger('closeSearch');
  },
  resetSearchField: function() {
    this.$("input[name='search']").val('');
    this.$("input[name='search']").attr('placeholder', '');
    this.$('.search-field').removeClass('search-field-wide');
    this.$('span.close-search').hide();
    this.$('span.icon-search').show();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App.notifications, 'update', this.notificationsAlert());
  },
});