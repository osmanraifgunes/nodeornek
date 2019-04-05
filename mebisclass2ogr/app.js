const express = require('express');
const bp = require('body-parser');
const db = require('./dbislemleri')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');  // tüm responselar buradan ge.er

app.use(bp.urlencoded({ extended: false }))
app.get('/search', db.personelgetir);
app.post('/search',db.arama );
app.get('/bolum/:id',db.bolumgetir );

app.listen(port, () => console.log('Example app listening on port:' + port))