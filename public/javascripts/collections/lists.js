var Lists = Backbone.Collection.extend({
  model: List,
  addList: function($formData) {
    var self = this;
    $.ajax({
      url: $formData.attr('action'),
      type: $formData.attr('method'),
      data: $formData.serialize(),
      success: function(json) {
        self.add(json);
        Backbone.history.loadUrl(Backbone.history.fragment);
        //App.router.navigate('', { trigger: true });
        // self.$('a.cancel-btn').trigger('click');
      },
    });
  },
});

