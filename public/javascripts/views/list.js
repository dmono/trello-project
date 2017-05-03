var ListView = Backbone.View.extend({
  template: App.templates.list,
  events: {
    'click .add-new-card': 'displayAddCardForm',
    'blur .list-name textarea': 'updateName',
    'click a.button': 'displayListActions',
    'click .submit-new-card': 'addNewCard',
    'click .cancel-btn': 'closeAddCardForm',
    'blur .new-card-textarea': 'closeAddCardForm',
  },
  addNewCard: function() {
    var title = this.$('.new-card-textarea').val();
    var listId = this.$el.attr('data-id');

    if (title) {
      App.trigger('addNewCard', title, listId);
    }
  },
  modifyKeyPress: function(e) {
    if (e.which === 13) {
      e.preventDefault();
      if ($(e.target).val()) {
        this.addNewCard();
      }
    } 

    if (e.which === 27) {
      e.preventDefault();
      this.closeAddCardForm();
    }
  },
  modifyNameKeyPress: function(e) {
    if (e.which === 13 || e.which === 27) {
      e.preventDefault();
      this.updateName(e);
      $(e.target).blur();
    } 
  },
  updateName: function(e) {
    var text = $(e.target).val();
    if (text) {
      this.model.save({ name: text });
    }
  },
  displayListActions: function(e) {
    e.preventDefault();
    var offset = $(e.currentTarget).offset();
    var height = $(e.currentTarget).height();

    App.trigger('viewListActions', this.model, offset, height);
  },
  displayAddCardForm: function(e) {
    e.preventDefault();
    this.$('.add-new-card').show();
    this.$('.new-card-form').hide()

    $(e.target).hide();
    this.$('.new-card-form').show()
    this.$('.new-card-textarea').focus();
  },
  closeAddCardForm: function() {
    this.$('.new-card-textarea').val('');
    this.$('.new-card-form').hide();
    this.$('.add-new-card').show();

    this.$('.new-card-textarea').off;
  },
  insertCards: function() {
    this.cardsView = new CardsView({
      collection: this.getListCards(),
    });

    this.$('.list-header').after(this.cardsView.el);
  },
  getListCards: function() {
    return App.cards.where({ 
      listId: this.model.get('id'),
      archived: false,
    }).sort(function(a, b) {
      return a.get('position') - b.get('position');
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('class', 'list-wrapper');
    this.$el.attr('data-id', this.model.id);
    this.insertCards();
    this.$('.list-name > textarea').on('keyup keypress', this.modifyNameKeyPress.bind(this));
    this.$('.new-card-textarea').on('keyup keypress', this.modifyKeyPress.bind(this));

    return this.el;
  },
  initialize: function() {
    this.render();
  }
});