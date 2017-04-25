'use strict';

var router = new (Backbone.Router.extend({
  routes: {
    'cards/:id': 'displayCardDetails',
  },
  index: function() {
    App.indexView();
  },
  displayCardDetails: function(id) {
    App.cardModalView(id);
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});