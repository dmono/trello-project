var Card = Backbone.Model.extend({
  defaults: {
    description: '',
    dueDate: '',
    labels: '',
    subscribed: false,
    subscribedAt: '',
    archived: false,
  },
});