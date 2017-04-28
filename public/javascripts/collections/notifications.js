var Notifications = Backbone.Collection.extend({
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
      } else if (activity.type === 'moved card') {
        activity.text = 'moved';
        activity.listName = App.lists.get(activity.listId).get('name');
      }
    });

    return data.sort(function(a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  },
});