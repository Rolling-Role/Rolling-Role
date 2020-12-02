var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
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
            if (body.length > 1e6)  //일정량 초과시 연결제거
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


        });
    }
});
app.listen(3000);

var diceNum = function(param){
    console.dir("1")
    var connection = mysql.createConnection({
        host     : 'localhost',    // 호스트 주소
        port     : '3307',
        user     : 'roll',           // mysql user
        password : '1234',       // mysql password
        database : 'rollingrole'         // mysql 데이터베이스
    });
    connection.connect();
    console.dir("2")
    connection.query("UPDATE groups SET leader_num='"+param.num+"' WHERE group_info='"+param.ip+"'",
        function (error, results) {
            if (error) throw error;
            console.dir(results);
        });
    connection.end();
}