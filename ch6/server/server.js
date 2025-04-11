const express = require('express');
const app = express();


app.listen(8080, function () {
    console.log('Listening on port 8080');
});
app.get('/book', (req, res) => {
    res.send('도서 목록 관련 페이지입니다.');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/book.html');
});