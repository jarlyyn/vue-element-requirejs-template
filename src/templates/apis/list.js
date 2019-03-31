define(function(require) {
    var app = require("app");
    var $ = require("jquery");
    var parsers = require("parsers");
    return function(vm, cb) {
      var url = app.Host + app.APIList.url;
      $.post(url, {})
        .done(function(body) {
          var data = parsers.parse200(body);
          vm.Items=data
          cb(data);
        })
        .fail(function(xhr) {});
    };
  });
  