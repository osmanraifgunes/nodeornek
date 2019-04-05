const mq = require('mssql');
var config = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22',
    database: 'DEPO'
};

module.exports.personelgetir = function (req, res) {
    mq.connect(config, function (err) {
        if (err) console.log(err);
        var request = new mq.Request();
        request.query("select * from tbl_Personel", function (err, recordset) {
            if (err) console.log(err)
            mq.close();
            res.render('home', { data: recordset.recordset });
            //res.send(recordset);
        });
    });
}
module.exports.arama=function (req, res) {
    mq.connect(config, function (err) {
        if (err) console.log(err);
        var request = new mq.Request();
        request.query("select * from tbl_Personel where Adi like '%" + req.body.search1 + "%'", function (err, recordset) {
            if (err) console.log(err)
            mq.close();
            res.send(recordset);
        });
    });

}

module.exports.bolumgetir = function name(req, res) {
    mq.connect(config,function(hata) {
        if (hata) {
            console.log('veri tabanına bağlanamadı');
        }
        var rq = new mq.Request();
        rq.query("select * from tbl_bolum where id = " + req.params.id,function (err, sorgusonucu) {
            mq.close();
            res.render("bolumdetay",{bolumveri:sorgusonucu.recordset})
        })
    })
}