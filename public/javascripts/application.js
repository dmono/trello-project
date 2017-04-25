var App = {
  templates: JST,
  indexView: function() {
    if (this.cardDetailsView) {
      this.cardDetailsView.closeModal();
    }
    this.renderBoard();
    this.headerView = new HeaderView();
    this.bindEvents();
  },
  renderBoard: function() {
    this.boardView = new BoardView({
      collection: this.lists,
    });

    this.boardView.render();
  },
  cardModalView: function(id) {
    id = Number(id.split('-')[0]);

    if (!this.boardView) {
      this.indexView();
    }

    this.cardDetailsView = new CardDetailsView({
      model: App.cards.get(id),
    });
  },
  search: function(query) {
    this.searchResults.set('query', query);
  },
  displaySearch: function() {
    this.searchResults = new Filter({ collection: this.cards });
    this.searchView = new SearchView({
      model: this.searchResults,
    });
  },
  displayLabelsMenu: function(model, offset, height) {
    this.labelsView = new LabelsPopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayDueDateMenu: function(model, offset, height) {
    this.dueDateView = new DueDatePopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayMoveMenu: function(model, offset, height) {
    this.moveCardView = new MovePopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  closeSearch: function() {
    this.searchView.close();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    // this.listenTo(this.lists, 'change', this.boardView.render);
    this.on('cardMoved', this.lists.updateCardPositions.bind(this.lists));
    this.on('changeCardList', this.cards.updateListId.bind(this.cards));
    this.on('addNewCard', this.cards.addCard.bind(this.cards));
    this.on('renderNewCard', this.lists.view.renderNewCard.bind(this.lists.view));
    this.on('viewLabels', this.displayLabelsMenu.bind(this));
    this.on('viewDueDate', this.displayDueDateMenu.bind(this));
    this.on('viewMoveCard', this.displayMoveMenu.bind(this));
    this.listenTo(this.headerView, 'openSearch', this.displaySearch);
    this.listenTo(this.headerView, 'performSearch', this.search);
    this.listenTo(this.headerView, 'closeSearch', this.closeSearch);
  },
  init: function() {
    // this.bindEvents();
  }
};

Handlebars.registerHelper('formatDateTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D') + ' at ' + dateObj.format('h:mm A');
});

Handlebars.registerHelper('formatCardUrl', function(id, title) {
  var formattedTitle = title.toLowerCase().slice(0, 130).replace(/[^a-z0-9]+/g, '-');
  if (formattedTitle.slice(-1) === '-') {
    formattedTitle = formattedTitle.slice(0, formattedTitle.length - 1);
  }

  return id + '-' + formattedTitle;
});
