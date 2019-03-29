const express = require('express');
const app = express();
const sql = require('mssql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const port = 3000;

const config = {
    user: 'medipollab',
    password: 'medipollab',
    server: '13.80.120.196', // You can use 'localhost\\instance' to connect to named instance
    database: 'medipollabdb'
}

app.post('/login', (req, res) => {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TUser Where UserName = '" + req.body.username + "'", function (err, recordset) {
            if (err) console.log(err)
            sql.close();
            if (recordset.recordset.length > 0) {
                res.send("giriş yapıldı");
            }
            else {
                res.send("kullanıcı yok");

            }
        });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))