define(function(require) {
  return {
    parse200: function(data) {
      return data.result;
    },
    parseItems:function(data){
      return data.result.datas;
    },
    parseItemsCount:function(data){
      return data.result.count*1;
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
