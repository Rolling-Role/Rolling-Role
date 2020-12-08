// 필요한 것들을 넣어줄것
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var app = http.createServer(function(request,response){
    var url = request.url; //내가 처리하고싶은 url


    if (request.method == 'GET') { //get으로 전달된거면 이부분 실행
        if(request.url == '/'){

            url = '/html/index.html';  //기본적으로 index.html이 실행됨
        }else if(request.url == '/favicon.ico'){
            response.writeHead(404); //바로가기 아이콘이 없으면 404 리턴
            response.end();
            return;
        }else {
            url = request.url; //기본이 아니라면 해당 url을 저장
        }

        response.writeHead(200); //잘 열렸다고 200으로 확인
        response.end(fs.readFileSync(__dirname + url)); //__dirname = 현재 서버가 있는 디렉터리
        return;
    }

    if (request.method == 'POST') { 
        var body = '';

        request.on('data', function (data) { //post로 전달된 데이터가 있으면 body에 차곡차곡 쌓아라
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () { //body로 들어온 데이터를 가공하여 뚝딱뚝딱해서 객체화시킴
            var post = qs.parse(body); //ex) 투표에서 찬성이 들어왔으면 객체화하여 출력
            console.dir(post);

            var text = request.url.split('/');
            var method = text[1];
        
            if(typeof(postMethods[method]) == 'undefined'){ //request.url이 정의되어 있지 않으면
                response.writeHead(404); //404에러 출력
                response.end();
                return;
            }else{
                console.dir(postMethods); //request.url이 존재하면 postMethods 실행하라
                postMethods[method](response,post);//post값 전달하는 과정
            }



            // use post['blah'], etc.
        });
    }

});
app.listen(3000); //localhost:80으로 서버에 접속. 자신은 3000을 들을 준비가 되어있음


var connInfo = {
    host     : 'localhost',   
    port     : '3307',
    user     : 'roll',       
    password : '1234',     
    database : 'rollingrole'    
};

var queryExecute = function(sql,callback){

    var connection = mysql.createConnection(connInfo);
    connection.connect();
    connection.query(sql,callback);
    connection.end();
};

var send200 = function(response,str){

    response.writeHead(200);
    response.write(str);
    response.end();
};



var getData = function(param,callback){

    var sql = 'select * from example';
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
          callback(results);
    });

};

var postMethods = {};


postMethods.save_leader = function(res,post){
    //var returnStr = JSON.stringify(post);

    var returnStr = '<html><script>document.location.href="next.html";</script></html>';
    send200(res,returnStr);

};

postMethods.add_group = function(res, post){
    var sql="UPDATE rollingrole.groups SET leader_num='"+post.num+"' WHERE group_info='"+post.ip+"'";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
        send200(res,returnStr)
    });
}

postMethods.dice_num = function(res, post){
    var sql="UPDATE rollingrole.groups SET leader_num='"+post.num+"' WHERE group_info='"+post.ip+"'";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
        send200(res,returnStr)
    });
}

postMethods.saveVote = function(res, post){
    var sql="UPDATE rollingrole.groups SET OPINION='"+post.opinion+"' WHERE group_info='"+post.ip+"'";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
        send200(res,returnStr)
    });
}

postMethods.role_name=function(res, post){
    var sql="UPDATE roles SET role_name='"+post.role_name1+"', do_num="+post.do_num1+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=1)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name2+"', do_num="+post.do_num2+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=2)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name3+"', do_num="+post.do_num3+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=3)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name4+"', do_num="+post.do_num4+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=4)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name5+"', do_num="+post.do_num5+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=5)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name6+"', do_num="+post.do_num6+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=6)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name7+"', do_num="+post.do_num7+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=7)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name8+"', do_num="+post.do_num8+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=8)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE roles SET role_name='"+post.role_name9+"', do_num="+post.do_num9+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && role_num=9)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
        send200(res,returnStr)  
    });
    
}       
postMethods.get_dice_num = function(res, post){
    var sql="select leader_num from rollingrole.groups WHERE group_info='"+post.ip+"'";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}

postMethods.get_saveVote = function(res, post){
    var sql="select OPINION from rollingrole.groups WHERE group_info='"+post.ip+"'";
    console.log("success");
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.check=function(res, post){
    var sql="UPDATE rollingrole.members SET role1_score="+post.searchAdd+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_name= '"+post.mem_name+"')";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 
    sql="UPDATE rollingrole.members SET role2_score="+post.pptAdd+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_name= '"+post.mem_name+"')";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE rollingrole.members SET role3_score="+post.announAdd+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_name= '"+post.mem_name+"')";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
    }); 
    sql="UPDATE rollingrole.members SET role4_score="+post.reportAdd+" WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_name= '"+post.mem_name+"')";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        returnStr = '';
        send200(res,returnStr);  
    });
    
} 

postMethods.get_check = function(res, post){
    var sql="select mem_name from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.get_check_score1 = function(res, post){
    var sql="select mem_name,role1_score from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.get_check_score2 = function(res, post){
    var sql="select mem_name,role2_score from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.get_check_score3 = function(res, post){
    var sql="select mem_name,role3_score from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.get_check_score4 = function(res, post){
    var sql="select mem_name,role4_score from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}
postMethods.add_mem = function(res, post){
    var sql="UPDATE rollingrole.members SET mem_name='"+post.mem1+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=1)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem2+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=2)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem3+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=3)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem4+"'WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=4)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem5+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=5)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem6+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=6)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem7+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=7)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem8+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=8)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
    }); 

    sql="UPDATE rollingrole.members SET mem_name='"+post.mem9+"' WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"') && mem_num=9)";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = '';
        send200(res,returnStr)
    }); 
    
}
postMethods.get_member = function(res, post){
    var sql="select mem_num,mem_name from rollingrole.members WHERE (group_num=(SELECT group_num FROM rollingrole.groups WHERE group_info='"+post.ip+"'))";
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        console.dir(results);
        var returnStr = JSON.stringify(results);
        send200(res,returnStr)
    });
}

