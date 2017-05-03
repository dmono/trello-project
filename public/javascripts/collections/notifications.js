var Notifications = Backbone.Collection.extend({
  url: '/notifications',
  model: Notification,
  addNew: function(activity) {
    var notification = activity.clone().unset('id').set('viewed', false);
    this.create(notification.toJSON(), { wait: true });
  },
  formatData: function() {
    var data = this.toJSON();

    data.forEach(function(activity) {
      if (activity.type === 'add comment') {
        activity.text = 'commented on';
      } else if (activity.type === 'changed due date') {
        activity.text = 'changed the due date on';
      } else if (activity.type === 'removed due date') {
        activity.text = 'removed the due date on';
      } else if (activity.type === 'archived') {
        activity.text = 'archived';
      } else if (activity.type === 'unarchived') {
        activity.text = 'unarchived';
      } else if (activity.type === 'moved card') {
        activity.text = 'moved';
        activity.listName = App.lists.get(activity.listId).get('name');
      }
    });

    return data.sort(function(a, b) {
      return b.id - a.id;
    });
  },
});