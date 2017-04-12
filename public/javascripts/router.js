'use strict';

var Router = Backbone.Router.extend({
  index: function() {
    this.boardView = new BoardView();
    this.listsView = new ListsView({
      collection: App.lists,
    });
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
  }
});