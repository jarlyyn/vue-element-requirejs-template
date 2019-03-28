define(function(require) {
  return {
    name: "componentname",
    template: require("text!./index.html"),
    props: ["user", "params"],
    watch: {
      $route: function(to, from) {
        this.load();
      }
    },
    mounted: function() {
      this.load();
    },
    methods: {
      load: function() {}
    },
    data: function() {
      return {};
    }
  };
});
