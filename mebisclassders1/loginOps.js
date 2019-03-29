const sql = require('mssql')
var webconfig  = {
    user: 'sa',
    password: 'MEDIPOL',
    server: '10.150.0.22', 
    database: 'TT_Sirket' 
};


module.exports.userLogin = function ( req,  res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from tbl_personel where  Adi like '%"+req.body.kelime+"%'", function (err, recordset) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.send(recordset);
        });
    });
}

