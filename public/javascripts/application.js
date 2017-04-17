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
  saveData: function() {
    this.lists.sync('update', this.lists);
    this.cards.each(function(card) {
      card.save();
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('cardMoved', this.lists.updateCardPositions.bind(this.lists));
    this.on('changeCardList', this.cards.updateListId.bind(this.cards));
    this.on('addNewCard', this.cards.addCard.bind(this.cards));
    this.on('renderNewCard', this.lists.view.renderNewCard.bind(this.lists.view));
    // $(window).on('unload', this.saveData.bind(this));
  },
  init: function(lists, cards, comments) {
    this.lists = new Lists(lists);
    this.cards = new Cards(cards);
    this.comments = new Comments(comments);
    this.router = new Router();
    this.setupRouter();
    this.bindEvents();
  }
};

Handlebars.registerHelper('formatDateTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D') + ' at ' + dateObj.format('h:mm A');
});