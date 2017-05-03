var DueDatePopoverView = PopoverView.extend({
  template: App.templates.due_date,
  events: function() {
    return _.extend({}, PopoverView.prototype.events, {
      'click .date-picker': 'selectDate',
      'click .save-date': 'save',
      'click .remove-date': 'removeDueDate',
    });
  },
  removeDueDate: function(e) {
    e.preventDefault();
    this.model.save({ dueDate: '' }, { activityType: 'removed due date'});
    this.close();
  },
  save: function(e) {
    e.preventDefault();

    var time = this.formatTime(this.$("input[name='time']").val());
    var newDate = moment(this.date + 'T' + time).toDate();

    this.model.save({ dueDate: newDate }, { activityType: 'changed due date'});
    this.close();
  },
  formatTime: function(time) {
    var units = time.split(/:| /);
    var hours = units[0];
    var minutes = units[1];
    var dayPart = units[2];

    if (dayPart === 'PM' && time !== '12:00 PM') {
      hours = (Number(hours) + 12).toString();
    }

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    return hours + ':' + minutes;
  },
  setDateTime: function() {
    this.dueDate = this.model.get('dueDate');
    
    if (this.dueDate) {
      this.date = moment(this.dueDate).format('YYYY-MM-DD');

      this.$("input[name='date']").val(moment(this.dueDate).format('M/D/YYYY'));
      this.$("input[name='time']").val(moment(this.dueDate).format('h:mm A'));

      this.$('.date-picker').datepicker('setDate', this.date);
    } else {
      this.date = moment().format('YYYY-MM-DD');

      this.$("input[name='date']").val(moment().format('M/D/YYYY'));
      this.$("input[name='time']").val('12:00 PM');
    }
  },
  updateDateField: function(date) {
    this.date = date;
    this.$("input[name='date']").val(moment(date).format('M/D/YYYY'));
  },
  displayDatePicker: function() {
    var self = this;

    this.$('.date-picker').datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat: 'yy-mm-dd',
      onSelect: function(date) {
        self.updateDateField(date);
      },
    });
  },
  render: function() {
    this.$el.html(this.template());
    PopoverView.prototype.render.call(this);
    this.displayDatePicker();
    this.setDateTime();
    this.showOverlay();
    this.showPopover();
  },
});