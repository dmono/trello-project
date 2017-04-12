var App = {
  templates: JST,
  setupRouter: function() {
    Backbone.history.start({
      pushState: true,
    });

    $(document).on('click', 'a[href^="/"]', function(e) {
      e.preventDefault();
      App.router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('addList', this.lists.addList.bind(this.lists));
  },
  init: function(lists) {
    this.lists = new Lists(lists);
    this.router = new Router();
    this.setupRouter();
    this.bindEvents();
  }
};