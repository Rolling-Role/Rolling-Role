// 필요한 것들을 넣어줄것
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var app = http.createServer(function(request,response){
    var url = request.url; //내가 처리하고싶은 url


    if (request.method == 'GET') { //get으로 전달된거면 이부분 실행
        if(request.url == '/'){

            url = '/html/vote2.html';  //기본적으로 index.html이 실행됨
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
            
            //내가 추가한 부분
            var a=url.split("/"); //split으로 / 제거완료
            console.dir(a[1]); //savaData가 콘솔에 출력되는지 확인하기 위해 적어줌

            request.url = a[1]; //savaData를 request.url에 저장할것임

            if(typeof(postMethods[request.url]) == 'undefined'){ //request.url이 정의되어 있지 않으면
                response.writeHead(404); //404에러 출력
                response.end();
                return;
            }else{
                console.dir(postMethods); //request.url이 존재하면 postMethods 실행하라
                postMethods[request.url](response,post);//post값 전달하는 과정
            }

        });
    }

});
app.listen(3000); //localhost:3000으로 서버에 접속. 자신은 3000을 들을 준비가 되어있음


var connInfo = {
    host     : 'localhost',    // 호스트 주소
    user     : 'roll',           // mysql user
    password : '1234',       // mysql password
    database : 'rollingrole'         // mysql 데이터베이스
};

var queryExecute = function(sql,callback){ //2~4번째 코드를 접속할때마다 입력하기 귀찮으니 함수를 만들어 간략화하겠음

    var connection = mysql.createConnection(connInfo); //서버에 접속하는 코드
    connection.connect();
    connection.query(sql,callback);
    connection.end();
};

var send200 = function(response,str){ //제대로 보냈을 경우 response와 str 이용해 함수 생성

    response.writeHead(200);
    response.write(str);
    response.end();
};


var getData = function(param,callback){

    var sql = 'select * from rollingrole';
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;

        callback(results);
    });

    
};

var postMethods = {};


//---------여기까지가 공통으로 되어야할 부분들

postMethods.saveVote = function(res,post){
    
    var sql = 'insert into save_vote (OPINION) values ("'+post.vote+'")';
    queryExecute(sql,function (error, results, fields) {
        if (error) throw error;
        var returnStr = JSON.stringify(post);
        send200(res,returnStr)
    });
    
};