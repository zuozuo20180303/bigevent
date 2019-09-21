

  //专门定义一个对象，该对象包含各种用户所需方法
    var obj ={
        login:function(userName,password,callback){
            $.post(qingqiu.user_login,{user_name:userName,password:password},function(res){
                  callback(res);
             
            })
        },
        getInfo:function(callback){
             $.get(qingqiu.user_getInfo,function(res){
                   console.log(res);
                    callback(res);
             })
        },
           logout:function(callback){
              $.post(qingqiu.user_logout,function(res){
                    callback(res)
              })
           }
    }
  