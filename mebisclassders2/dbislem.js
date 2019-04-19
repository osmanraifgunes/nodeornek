const sql = require('mssql');
const dosyasistemi = require('fs');

const config = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22', // You can use 'localhost\\instance' to connect to named instance
    database: 'intteklab1b'
}

module.exports.liste = function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TUser", function (err, recordset) {
            if (err) console.log(err)
            sql.close();
            res.render('home', { data: recordset.recordset });
        });
    });
}

module.exports.login = function (req, res) {
    res.render('home');
}


module.exports.departmandetay = function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TDepartment where YoneticiId = " + req.params.id, function (err, depler) {
            if (err) console.log(err)
            sql.close();
            res.render('dep', { veriler: depler });
        });
    });
}

module.exports.ekleGet = function (req, res) {
    res.render('ekle');
}

module.exports.eklePost = function (req, res) {
    var dosya = [];
    
    /*req.on('data', parca => {
        dosya.push(parca);
    });
    req.on('end', parca => {
        dosyasistemi.writeFile('deneme.jpg',dosya,function(){

        })
    });*/
    res.render('ekle');

}
