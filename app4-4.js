// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// 익스프레스 객체 생성
var app = express();



// 미들웨어에서 응답 전송할 때 send 메소드 사용하여 JSON 데이터 전송
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    // 데이터는 HTML 문자열
    var person = {name:'소녀시대', age:20};
    var personStr = JSON.stringify(person);
    
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.end(personStr);
    
});



// Express 서버 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});



/*
    HTML 문자열로 인식되어 출력

    {"name":"소녀시대","age":20}
*/