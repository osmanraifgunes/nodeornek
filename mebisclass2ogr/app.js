const express = require('express');
const mq = require('mssql');
const bp = require('body-parser');
const app = express();
const port = 3000;
var config = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22', 
    database: 'TT_Sirket' 
};

app.use(bp.urlencoded({ extended: false }))
app.post('/search', function(req,res) {

     mq.connect(config, function (err) {
        if (err) console.log(err);
        var request = new mq.Request();
        request.query("select * from tbl_Personel where Adi like '%"+ req.body.search1 +"%'", function (err, recordset) {
            if (err) console.log(err)
            mq.close();
            res.send(recordset);
        });
    });

   // res.send('Hello login!')
});

app.listen(port, () => console.log('Example app listening on port:' + port))