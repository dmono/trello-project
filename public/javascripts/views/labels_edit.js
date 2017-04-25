var LabelsEditView = Backbone.View.extend({
  template: App.templates.labels_edit,
  events: {
    'click .color-picker': 'selectColor',
    'click input[name="save"]': 'saveLabel',
  },
  saveLabel: function(e) {
    e.preventDefault();
    var newName = this.$("input[name='name']").val();
    var newColor = this.$('.selected-color:visible').parent().attr("data-color");

    this.label.save({
      name: newName,
      color: newColor
    });

    this.parentView.trigger('updatedLabel');
  },
  selectColor: function(e) {
    this.$('.selected-color').hide();
    $(e.currentTarget).find('.selected-color').show();
  },
  populate: function() {
    var color = this.label.get('color');
    this.$("input[name='name']").val(this.label.get('name'));
    this.$('.color-picker').each(function() {
      if ($(this).attr('data-color') === color) {
        $(this).find('.selected-color').css('display', 'inline');
      }
    });
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function(options) {
    this.label = App.labels.get(options.labelId);
    this.parentView = options.parent;
    this.render();
    this.populate();
  }
});