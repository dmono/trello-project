var Card = Backbone.Model.extend({
  defaults: {
    description: '',
    dueDate: '',
    labels: '',
    activity: [],
    subscribed: false,
  }
});