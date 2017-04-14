var Card = Backbone.Model.extend({
  defaults: {
    description: '',
    dueDate: '',
    labels: '',
    comments: [],
    activity: [],
    subscribed: false,
  }
});