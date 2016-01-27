var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function() {
    this.collection = new Todos();
    this.render();
  },

  render: function() {
    this.$el.html('Hello, world!');
  }

});
