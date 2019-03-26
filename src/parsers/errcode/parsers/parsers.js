define(function(require) {
  return {
    parse200: function(data) {
      return data.result;
    },
    parse422: function(data) {
      var result = [];
      var errors = data.msg;
      for (var field in errors) {
        for (var i in errors[field]) {
          result.push({ Label: field, Msg: errors[field][i] });
        }
      }
      return result;
    }
  };
});
