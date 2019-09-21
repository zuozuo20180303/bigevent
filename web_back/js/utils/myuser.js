

  //专门定义一个对象，该对象包含各种用户所需方法
    var obj ={
        login:function(userName,password,callback){
            $.post('http://localhost:8000/admin/login',{user_name:userName,password:password},function(res){
                  callback(res);
             
            })
        },
        getInfo:function(callback){
             $.get('http://localhost:8000/admin/getuser',function(res){
                   console.log(res);
                    callback(res);
             })
        },
           logout:function(callback){
              $.post('http://localhost:8000/admin/logout',function(res){
                    callback(res)
              })
           }
    }
  