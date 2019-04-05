const sql = require('mssql')
var webconfig  = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22', 
    database: 'DEPO' 
};


module.exports.userLogin = function ( req,  res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from tbl_personel", function (err, verisonucu) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.render('home',{veri:verisonucu.recordset});
        });
    });
}


module.exports.userDetay = function ( req,  res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from Tbl_bolum where id = " + req.params.bolumid, function (err, bolumverisi) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.render('detay',{bolum:bolumverisi.recordset});
        });
    });
}