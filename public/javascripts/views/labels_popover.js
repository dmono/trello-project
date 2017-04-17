var LabelsPopoverView = Backbone.View.extend({
  template: App.templates.labels,
  events: {
    'click .label': 'selectLabel',
    'click .popover-header a': 'close',
  },
  selectLabel: function(e) {
    var $label = $(e.target);
    var color = $label.attr('data-color');
    var currentLabels = this.model.get('labels') || [];

    $label.find('.selected-label').toggle();

    if ($label.find('.selected-label:visible').length > 0) {
      currentLabels.push(color);
      this.model.save({ labels: currentLabels })
    } else {
      this.model.save({ labels: _.without(currentLabels, color) });
    }
  },
  checkLabels: function() {
    var currentLabels = this.model.get('labels');

    if (currentLabels) {
      this.$('.label').each(function() {
        if (currentLabels.indexOf($(this).attr('data-color')) > -1) {
          $(this).find('.selected-label').css('display', 'block');
        }
      });
    }
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template());
    this.checkLabels();
    this.$el.appendTo('.popover');
  },
  initialize: function() {
    this.render();
  }
});