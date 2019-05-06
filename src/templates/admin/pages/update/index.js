define(function(require) {
  var itemview=require("js/app/apis/itemview")
  var itemupdate=require("js/app/apis/itemupdate")
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
      load: function() {
        var self = this;
        this.id=this.$route.params.id;
        itemview(this,function(){
        })
      },
      onSubmit: function() {
        var self=this;
        this.errors = [];
        itemupdate(this,function(){
          if (self.errors.length==0){

          }
        })
      }
    },
    data: function() {
      return {
        id:"",
        Item:{},
        errors: []
      };
    }
  };
});
