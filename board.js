const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("게시글 리스트 페이지")
});

app.get('/articles/add', (req, res) => {
    res.send("게시글 작성 페이지")
});

app.get('/articles/detail', (req, res) => {
    res.send("게시글 상세 페이지")
});

app.post('/articles/action/add', (req, res) => {
    res.send("게시글 글 작성 동작")
});

app.post('/articles/action/change', (req, res) => {
    res.send("게시글 글 수정 동작")
});

app.post('/articles/action/delete', (req, res) => {
    res.send("게시글 글 삭제 동작")
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 열립니다")
});