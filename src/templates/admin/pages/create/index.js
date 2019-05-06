define(function(require) {
  var itemcreate=require("js/app/apis/itemcreate")

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
        var self=this;
        this.errors = [];
        itemcreate(this,function(){
          if (self.errors.length==0){
            self.$router.push("successurl");
          }
        })
      }
    },
    data: function() {
      return {
        Item: {},
        errors: []
      };
    }
  };
});
