define(function(require) {
    var itemview=require("js/app/apis/itemview")
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
            this.id=this.$route.params.id
            itemview(this,function(){

            })
        }
      },
      data: function() {
        return {
            id:"",
            Item:{}
        };
      }
    };
  });
  