define(function(require) {
  return {
    name: "componentname",
    template: require("text!./index.html"),
    watch: {
      $route: function(to, from) {
        this.load();
      }
    },
    mounted: function() {
      this.load();
    },
    methods: {
      load: function() {},
      onSubmit: function() {
        this.errors = [];
      }
    },
    data: function() {
      return {
        form: {},
        errors: []
      };
    }
  };
});
