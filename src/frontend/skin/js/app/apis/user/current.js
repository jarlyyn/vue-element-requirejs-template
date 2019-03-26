define(function(require) {
  var app = require("app");
  var $ = require("jquery");
  var parsers = require("parsers");
  return function(cb) {
    let url = app.Host + app.APIList.current;
    $.ajax(url, {
      type: "GET"
    }).done(function(body) {
      app.Vue.CurrentUser = parsers.parse200(body);
      cb(body);
    });
  };
});
