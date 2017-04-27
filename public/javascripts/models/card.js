var Card = Backbone.Model.extend({
  defaults: {
    description: '',
    dueDate: '',
    labels: '',
    activity: [],
    subscribed: false,
  },
  logActivity: function(options) {
    var existing = this.get('activity');
    this.save({ activity: existing.push(options) }, {
      success: function(model) {
        App.trigger('notify', model);
      },
    });

  }
});