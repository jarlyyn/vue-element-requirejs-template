define(function(require) {
  var Vue = require("vue");
  var template = require("text!./app.html");
  var Errorpage = require("components/widgets/error");
  var LayoutMain = require("components/layouts/main/index");

  return {
    name: "app",
    template: template,
    props: ["user", "error", "params"],
    components: {
      Errorpage: Errorpage,
      LayoutMain: LayoutMain
    }
  };
});
