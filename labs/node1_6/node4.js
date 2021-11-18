const mysql = require('mysql');
const util = require("util");
const express = require('express');

const app = express();
let queryResult = "";

const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "example_db"
});

const query = util.promisify(con.query).bind(con);

(async () => {
    try {
        const result = await query('SELECT * FROM event');
        console.log(result);
    } finally {
        con.end();
    }
})()

/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM event", function (err, result) {
        if (err) throw err;
        queryResult = result;
    });
});
app.get('/', function (req, res) {
    res.send(queryResult);
})

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
*/