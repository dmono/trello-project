var LabelsPopoverView = PopoverView.extend({
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click .popover-back': 'viewLabels',
      'click .edit-label': 'editLabel',
    });
  },
  editLabel: function(e) {
    e.preventDefault();
    var labelId = $(e.currentTarget).attr('data-id');

    this.selectLabelsView.remove();
    this.editLabelsView = new LabelsEditView({
      model: this.model,
      labelId: labelId,
      parent: this,
    });

    this.$el.append(this.editLabelsView.el);
  },
  viewLabels: function(e) {
    if (e) { e.preventDefault(); }
    this.editLabelsView.remove();

    this.selectLabelsView = new LabelsSelectView({
      model: this.model,
    });

    this.$el.append(this.selectLabelsView.el);
  },
  render: function() {
    this.selectLabelsView = new LabelsSelectView({
      model: this.model,
    });
    this.$el.append(this.selectLabelsView.el);
    this.showOverlay();
    this.showPopover();
  },
  initialize: function(options) {
    PopoverView.prototype.initialize.call(this, options);
    this.listenTo(this, 'updatedLabel', this.viewLabels.bind(this));
  },
});