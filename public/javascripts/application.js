var App = {
  templates: JST,
  indexView: function() {
    if (this.cardDetailsView) {
      this.cardDetailsView.closeModal();
    }
    this.renderBoard();
    this.headerView = new HeaderView();
    this.bindEvents();
    this.searchResults = new Filter({ collection: this.cards });
    this.notifications = new Notifications(this.getNotifications());
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

    $('.card-details-modal').html(this.cardDetailsView.el);
    $('.modal-overlay').css('display', 'flex');
  },
  closeModal: function() {
    $('.modal-overlay').hide();
    router.navigate('', { trigger: true });
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
  displayCopyMenu: function(model, offset, height) {
    this.copyCardView = new CopyPopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displaySearch: function(offset, height) {
    $('.popover').addClass('search-modal');
    this.searchView = new SearchView({
      model: this.searchResults,
      offset: offset,
      height: height,
    });
  },
  closeSearch: function() {
    this.headerView.resetSearchField();
    $('.popover').removeClass('search-modal').hide();
    this.searchView.remove();
  },
  search: function(query) {
    this.searchResults.set('query', query);
  },
  displayNotifications: function(offset, height) {
    $('.popover').addClass('notification-modal');
    this.notificationsView = new NotificationsView({
      collection: this.notifications,
      offset: offset,
      height: height,
    });
  },
  getNotifications: function() {
    var results = [];
    var self = this;
    var subscribedCards = this.cards.where({
      subscribed: true,
      archived: false,
    });

    subscribedCards.forEach(function(model) {
      results.push(self.activityLog.where({ cardId: model.id }));
    });

    return _.flatten(results);
  },
  checkForNotifications: function() {
    this.notifications.add(this.getNotifications());
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    //this.listenTo(this.cards, 'add', this.renderBoard.bind(this));
    // this.listenTo(this.cards, 'update', this.boardView.render);
    // need this because the view renders before the positions are updated
    this.on('cardsModified', this.renderBoard.bind(this));
    this.on('cardMoved', this.cards.updatePositions.bind(this.cards));
    this.on('cardCopied', this.cards.copyCard.bind(this.cards));
    this.on('changeCardList', this.cards.updateListId.bind(this.cards));
    this.on('addNewCard', this.cards.addCard.bind(this.cards));
    this.on('viewLabels', this.displayLabelsMenu.bind(this));
    this.on('viewDueDate', this.displayDueDateMenu.bind(this));
    this.on('viewMoveCard', this.displayMoveMenu.bind(this));
    this.on('viewCopyCard', this.displayCopyMenu.bind(this));
    this.on('closeModal', this.closeModal);
    this.on('closeSearch', this.closeSearch.bind(this));
    this.on('viewNotifications', this.displayNotifications.bind(this));
    this.listenTo(this.headerView, 'openSearch', this.displaySearch);
    this.listenTo(this.headerView, 'performSearch', this.search);
    this.listenTo(this.activityLog, 'add', this.checkForNotifications);
  },
  init: function() {
    // this.bindEvents();
  }
};

Handlebars.registerHelper('formatDateTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D') + ' at ' + dateObj.format('h:mm A');
});

Handlebars.registerHelper('formatShortDueDate', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D');
});

Handlebars.registerHelper('formatActivityTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.fromNow();
  //return dateObj.calendar();
});

Handlebars.registerHelper('formatCardUrl', function(id, title) {
  var formattedTitle = title.toLowerCase().slice(0, 130).replace(/[^a-z0-9]+/g, '-');
  if (formattedTitle.slice(-1) === '-') {
    formattedTitle = formattedTitle.slice(0, formattedTitle.length - 1);
  }

  return id + '-' + formattedTitle;
});
