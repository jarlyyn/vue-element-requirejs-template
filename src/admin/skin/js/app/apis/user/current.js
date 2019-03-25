define(function(require) {
  var app = require("app");
  var $ = require("jquery");

  return function(cb) {
    let url = app.Host + app.APIList.current;
    $.ajax(url, {
      type: "GET"
    }).done(function(body) {
      app.Vue.CurrentUser = body;
      cb(body);
    });
  };
});
