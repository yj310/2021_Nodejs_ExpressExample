// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// 익스프레스 객체 생성
var app = express();


// 미들웨어에서 redirect 메소드 사용
app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    res.redirect('http://google.co.kr');
})



// Express 서버 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});


/* 
    google 페이지 실행
 */