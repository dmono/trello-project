var Notifications = Backbone.Collection.extend({
  url: '/notifications',
  model: Notification,
  addNew: function(activityId) {
    this.create({
      activityId: activityId,
      viewed: false,
    });
  },
  formatData: function() {
    var data = this.toJSON();
    var activityData;

    data.forEach(function(activity) {
      activityData = App.activityLog.get(activity.activityId).clone().unset('id').toJSON();
      _.extend(activity, activityData);

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
      }
    });

    return data.sort(function(a, b) {
      return b.id - a.id;
    });
  },
});