define(function(require) {
    var app = require("app");
    var $ = require("jquery");
    var parsers = require("parsers");
    return function(vm, cb) {
      var url = app.Host + app.APIList.url;
      $.get(url, {page:vm.CurrentPage})
        .done(function(body) {
          var data = parsers.parse200(body);
          vm.Items=parsers.parseItems(body);
          vm.Count=parsers.parseItemsCount(body);
          cb(data);
        })
        .fail(function(xhr) {});
    };
  });
  
