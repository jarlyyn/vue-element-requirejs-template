requirejs.config({
  baseUrl: "skin/",
  paths: {
    app: "js/app/app",
    vue: "js/libs/vue",
    text: "js/libs/text",
    lodash: "js/libs/lodash.min",
    jquery: "js/libs/jquery-3.3.1.min",
    "vue-router": "js/libs/vue-router",
    ELEMENT: "js/libs/element/index",
    Cookies: "js/libs/js.cookie.min",
    tinymce: "js/libs/tinymce/tinymce.min",
    Editor: "js/libs/tinymce-vue.min"
  },
  shim: {
    Vue: { exports: "Vue" },
    jquery: { exports: "$" },
    Cookies: { exports: "Cookies" },
    tinymce: { exports: "tinymce" },
    Editor: { exports: "Editor" },
    app: { exports: "app" }
  }
});

define(function(require) {
  var Vue = require("vue");
  var Element = require("ELEMENT");
  var app = require("app");
  var App = require("components/app");
  var ajaxinit = require("js/app/libs/ajaxinit");
  var filters = require("js/app/libs/filters");

  Element.install(Vue);
  var router = require("js/app/router");
  app.Vue = new Vue({
    el: "#app",
    router: router,
    data: {
      CurrentUser: null,
      Error: ""
    },
    template: '<App :user="CurrentUser" :error="Error"/>',
    components: {
      App: App
    }
  });
});
