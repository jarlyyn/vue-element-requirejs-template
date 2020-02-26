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
        var self=this
        self.$refs["form"].validate(function(valid){
          if (valid){

          }else{
            return false
          }
          })  
      }
    },
    data: function() {
      return {
        form: {},
        rules:{
        },
        errors: []
      };
    }
  };
});
