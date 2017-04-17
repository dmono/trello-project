var DueDatePopoverView = Backbone.View.extend({
  template: App.templates.due_date,
  $datepicker: this.$('.datepicker'),
  events: {
    'click .popover-header a': 'close',
    'click .date-picker': 'selectDate',
    'click .save-date': 'save',
    'click .date-remove': 'removeDueDate',
  },
  close: function(e) {
    if (e) {
      e.preventDefault();
    }
    
    this.remove();
  },
  removeDueDate: function(e) {
    e.preventDefault();

    this.model.save({ dueDate: '' });
    this.close();
  },
  save: function(e) {
    e.preventDefault();
    var time = this.formatTime(this.$("input[name='time']").val());
    var newDate = moment(this.date + 'T' + time).toDate();

    this.model.save({ dueDate: newDate });
    this.close();
  },
  formatTime: function(time) {
    var units = time.split(/:| /);
    var hours = units[0];
    var minutes = units[1];
    var dayPart = units[2];

    if (dayPart === 'PM') {
      hours = (Number(hours) + 12).toString();
    }

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    return hours + ':' + minutes;
  },
  // updateDateInput: function(date) {
  //   //var day = moment(date, 'MM/DD/YYYY');
  //   var time = this.$("input[name='time']").val();
  //   var timeDay = time.clone().startOf('day');
  //   var seconds = time.diff(timeDay, 'seconds');
  //   var newDate = moment(date, 'MM/DD/YYYY').add(seconds);
  //   console.log(seconds);
  // },
  setDateTime: function() {
    this.dueDate = this.model.get('dueDate');
    
    if (this.dueDate) {
      this.date = moment(this.dueDate).format('YYYY-MM-DD');

      this.$("input[name='date']").val(moment(this.dueDate).format('M/D/YYYY'));
      this.$("input[name='time']").val(moment(this.dueDate).format('h:mm A'));
    } else {
      this.date = moment().format('YYYY-MM-DD');

      this.$("input[name='date']").val(moment().format('M/D/YYYY'));
      this.$("input[name='time']").val('12:00 PM');
    }
    console.log(this.date);
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
    this.setDateTime();
    this.displayDatePicker();

    this.$el.appendTo('.popover');
  },
  initialize: function() {
    this.render();
  }
});