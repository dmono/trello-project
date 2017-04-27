var LabelsSelectView = Backbone.View.extend({
  template: App.templates.labels,
  events: {
    'click .label': 'selectLabel',
  },
  selectLabel: function(e) {
    var $label = $(e.target).closest('.label');
    var labelId = Number($label.attr('data-id'));
    var currentLabels = JSON.parse(JSON.stringify(this.model.get('labels'))) || [];

    $label.find('.selected-label').toggle();

    if ($label.find('.selected-label:visible').length > 0) {
      currentLabels.push(labelId);
      this.model.save({ labels: currentLabels });
    } else {
      this.model.save({ labels: _.without(currentLabels, labelId) });
    }
  },
  checkLabels: function() {
    var currentLabels = this.model.get('labels');
    if (currentLabels) {
      this.$('.label').each(function() {
        if (currentLabels.indexOf(Number($(this).attr('data-id'))) > -1) {
          $(this).find('.selected-label').css('display', 'block');
        }
      });
    }
  },
  viewLabels: function(e) {
    e.preventDefault();
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ labels: App.labels.toJSON() }));
    this.checkLabels();
  },
  initialize: function() {
    this.render();
  }
});