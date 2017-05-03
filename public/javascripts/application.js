var App = {
  templates: JST,
  indexView: function() {
    if (this.cardDetailsView) {
      this.cardDetailsView.remove();
      this.cardDetailsView.close();
    }
    this.renderBoard();
  },
  renderBoard: function() {
    if (this.boardView) {
      this.boardView.remove();
    }

    this.boardView = new BoardView({
      collection: this.lists,
    });

    this.boardView.render();
    $('main').html(this.boardView.el);
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
  closeModalByOverlay: function(e) {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  },
  displayArchiveMenu: function(offset, height) {
    this.archiveView = new ArchivePopoverView({
      offset: offset,
      height: height,
      lists: App.lists.where({ archived: true }),
      cards: App.cards.where({ archived: true }),
    });
  },
  displayListMenu: function(model, offset, height) {
    this.listActionsView = new ListPopoverView({
      model: model,
      offset: offset,
      height: height,
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

    if (this.searchView) {
      this.searchView.remove();
    }
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

    this.headerView.notificationsAlert(false);
  },
  getNotifications: function() {
    var results = [];
    var self = this;
    var subscribedCards = this.cards.where({
      subscribed: true,
      archived: false,
    });

    subscribedCards.forEach(function(card) {
      results.push(self.activityLog.filter(function(activity) {
        return card.id === activity.get('cardId') &&
          new Date(activity.get('createdAt')) > new Date(card.get('subscribedAt'));
      }));
    });

    return _.flatten(results);
  },
  checkNotifications: function() {
    if (this.notifications.where({ viewed: false })) {
      this.headerView.notificationsAlert(true);
    }
  },
  updateActivity: function(model, value, options) {
    this.activityLog.addToLog(model, value, options, this.cards);
  },
  updateNotifications: function(activity) {
    if (App.cards.get(activity.get('cardId')).get('subscribed')) {
      this.notifications.addNew(activity);
    }
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    // need this because the view renders before the positions are updated in copy card mode
    this.on('listModified', this.renderBoard);
    this.on('listMoved', this.lists.updatePositions.bind(this.lists));
    this.on('unarchiveList', this.lists.unarchive.bind(this.lists));
    this.on('cardsModified', this.renderBoard);
    this.on('cardMoved', this.cards.updatePositions.bind(this.cards));
    this.on('cardCopied', this.cards.copyCard.bind(this.cards));
    this.on('changeCardList', this.cards.updateListId.bind(this.cards));
    this.on('addNewCard', this.cards.addCard.bind(this.cards));
    this.on('viewArchive', this.displayArchiveMenu);
    this.on('viewListActions', this.displayListMenu);
    this.on('viewLabels', this.displayLabelsMenu);
    this.on('viewDueDate', this.displayDueDateMenu);
    this.on('viewMoveCard', this.displayMoveMenu);
    this.on('viewCopyCard', this.displayCopyMenu);
    this.on('closeModal', this.closeModal);
    this.on('closeSearch', this.closeSearch);
    this.on('viewNotifications', this.displayNotifications);
    this.on('newComment', this.comments.addComment.bind(this.comments));
    this.on('openSearch', this.displaySearch);
    this.on('performSearch', this.search);
    this.listenTo(this.lists, 'add', this.renderBoard);
    this.listenTo(this.cards, 'change:dueDate change:listId change:archived', 
      this.updateActivity);
    this.listenTo(this.cards, 'change:labels change:subscribed change:description change:dueDate change:archived', 
      this.renderBoard);
    this.listenTo(this.comments, 'add', this.renderBoard);
    this.listenTo(this.comments, 'add', this.updateActivity);
    this.listenTo(this.activityLog, 'add', this.updateNotifications);
    this.listenTo(this.notifications, 'add', this.checkNotifications)
    $('body').on('click', '.modal-overlay', this.closeModalByOverlay.bind(this));
  },
  init: function() {
    this.searchResults = new Filter({ collection: this.cards.where({ archived: false }) });
    this.headerView = new HeaderView();
    this.bindEvents();
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
});

Handlebars.registerHelper('formatCardUrl', function(id, title) {
  var formattedTitle = title.toLowerCase().slice(0, 130).replace(/[^a-z0-9]+/g, '-');
  if (formattedTitle.slice(-1) === '-') {
    formattedTitle = formattedTitle.slice(0, formattedTitle.length - 1);
  }

  return id + '-' + formattedTitle;
});
