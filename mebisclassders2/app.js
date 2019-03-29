const express = require('express');
const app = express();
app.set('view engine', 'ejs');

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
app.post('/login', function(req, res) {
    res.render('home');
});
app.get('/login', (req, res) => {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TUser", function (err, recordset) {
            if (err) console.log(err)
            sql.close();
            res.render('home',{data:recordset.recordset});
        });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))