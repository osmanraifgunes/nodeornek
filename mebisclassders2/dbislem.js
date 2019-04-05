const sql = require('mssql');

const config = {
    user: 'medipollab',
    password: 'medipollab',
    server: '13.80.120.196', // You can use 'localhost\\instance' to connect to named instance
    database: 'medipollabdb'
}

module.exports.liste = function(req, res){
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TUser", function (err, recordset) {
            if (err) console.log(err)
            sql.close();
            res.render('home',{data:recordset.recordset});
        });
    });
}

module.exports.login = function(req, res) {
    res.render('home');
}


module.exports.departmandetay = function(req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from TDepartment where YoneticiId = " + req.params.id, function (err, depler) {
            if (err) console.log(err)
            sql.close();
            res.render('dep',{veriler:depler});
        });
    });
}