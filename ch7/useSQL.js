const express = require('express');
const app = express();

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1111",
    database: "myboard",
});

conn.connect();

app.get('/list', function(req, res) {
    conn.query("select * from post_bk", function (error, rows, fields) {
        if (error) throw error;
        console.log(rows);
    });
});



app.listen(8080, function () {
    console.log('Listening on port 8080');
});
app.get('/book', (req, res) => {
    res.send('도서 목록 관련 페이지입니다.');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/book.html');
});