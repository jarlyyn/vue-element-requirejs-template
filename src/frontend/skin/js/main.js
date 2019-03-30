requirejs.config({
  baseUrl: "skin/",
  paths: {
    app: "js/app/app",
    urlArgs: 'v=1',
    vue: "js/libs/vue",
    text: "js/libs/text",
    lodash: "js/libs/lodash.min",
    jquery: "js/libs/jquery-3.3.1.min",
    "vue-router": "js/libs/vue-router",
    Cookies: "js/libs/js.cookie.min",
    parsers: "js/parsers/parsers"
  },
  shim: {
    Vue: { exports: "Vue" },
    jquery: { exports: "$" },
    Cookies: { exports: "Cookies" },
    app: { exports: "app" }
  }
});

define(function(require) {
  var Vue = require("vue");
  var app = require("app");
  var App = require("components/app");
  var ajaxinit = require("js/app/libs/ajaxinit");
  var filters = require("js/app/libs/filters");
  ajaxinit();
  filters();
  var router = require("js/app/router");
  app.Vue = new Vue({
    el: "#app",
    router: router,
    data: {
      CurrentUser: null,
      Error: "",
      Params: {}
    },
    template: '<App :user="CurrentUser" :error="Error" :params="Params"/>',
    components: {
      App: App
    }
  });
});
