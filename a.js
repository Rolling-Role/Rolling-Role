var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
var app = http.createServer(function(request,response){
    var url = request.url;

    if (request.method == 'GET') {
        if(request.url == '/'){
            url = '/html/index.html';
        }

        if(request.url == '/favicon.ico'){
            response.writeHead(404);
            response.end();
            return;
        }

        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
    }else if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            console.dir(post);

            if(request.url == '/dice_num'){ 
                diceNum(post);
                response.writeHead(200);
                console.dir(response);
                response.write('response');
                response.end();
                return;
            }
            else if(request.url == '/role_name'){ 
                roleName(post);
                response.writeHead(200);
                console.dir(response);
                response.write('response');
                response.end();
                return;
            }else if(request.url == '/get_dice_num'){
                var result = get_diceNum(post,function(result){
                    response.writeHead(200);
                    response.write(JSON.stringify(result));
                    response.end();
                });
                return;
            
        }

        });
    }
});
app.listen(3000);

var diceNum = function(param){
    var connection = mysql.createConnection({
        host     : 'localhost',   
        port     : '3307',
        user     : 'roll',       
        password : '1234',     
        database : 'rollingrole'    
    });
    connection.connect();
    connection.query("UPDATE rollingrole.groups SET leader_num='"+param.num+"' WHERE group_info='"+param.ip+"'",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
    connection.end();
}
var get_diceNum = function(param,callback){
    var connection = mysql.createConnection({
        host     : 'localhost',   
        port     : '3307',
        user     : 'roll',       
        password : '1234',     
        database : 'rollingrole'
    });
    connection.connect();
    connection.query('select leader_num from rollingrole.groups',function (error, results, fields) {
            if (error) throw error;

            callback(results);
            console.dir(results);
            // return results;
            // console.log('The solution is: ', results[0].solution);
        });
    connection.end();
}
var roleName=function(param){
    var group_num=0;
    var connection = mysql.createConnection({
        host     : 'localhost',   
        port     : '3307',
        user     : 'roll',       
        password : '1234',     
        database : 'rollingrole'    
    });
    connection.connect();
        connection.query("UPDATE roles SET role_name='"+param.role_name1+"', do_num="+param.do_num1+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=1)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name2+"', do_num="+param.do_num2+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=2)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name3+"', do_num="+param.do_num3+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=3)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name4+"', do_num="+param.do_num4+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=4)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name5+"', do_num="+param.do_num5+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=5)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name6+"', do_num="+param.do_num6+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=6)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name7+"', do_num="+param.do_num7+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=7)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name8+"', do_num="+param.do_num8+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=8)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        connection.query("UPDATE roles SET role_name='"+param.role_name9+"', do_num="+param.do_num9+" WHERE (group_num=(SELECT group_num FROM groups WHERE group_info='"+param.ip+"') && role_num=9)",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
        
    connection.end();
}