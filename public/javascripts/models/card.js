var Card = Backbone.Model.extend({
  defaults: {
    description: '',
    dueDate: '',
    labels: '',
    subscribed: false,
    archived: false,
  },
});