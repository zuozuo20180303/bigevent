var user = {
  /**
   * 管理员登陆
   * @param {*} userName 用户名
   * @param {*} password 密码
   * @param {*} callBack 回调函数
   */
  login: function(userName, password, callBack) {
    // alert(userName + password);
    $.post(URLIST.user_login, { user_name: userName, password: password }, function(res) {
      // res 是本次请求，从服务器回来的数据
      callBack(res);
    });
  },

  logout: function(callBack) {
    $.post(URLIST.user_logout, function(res) {
      callBack(res);
    });
  },

  getInfo: function(callBack) {
    $.get(URLIST.user_info, function(res) {
      callBack(res);
    });
  },
    getShow:function(callBack){
         $.get(URLIST.wenzhang_show,function(res){
            callBack(res);
         
         });
    },
    getadd:function(name,slug,callBack){
           $.post(URLIST.wenzhang_add,{name:name,slug:slug},function(res){
               callBack(res);
           })
    },
    getbian:function(id,name,slug,callBack){
            $.post(URLIST.wenzhang_bianji,{id:id,name:name,slug:slug},function(res){
                
                  callBack(res);
            }) 
    },
     get_del:function(id,callBack){
        $.post(URLIST.wenzhang_del,{id:id},function(res){
             callBack(res);
        })
     }
};
  