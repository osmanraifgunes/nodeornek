const express = require('express');
var bodyParser = require('body-parser');
var dbops = require('./dbislem')
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());


const port = 3000;


app.get('/login', dbops.liste);
app.post('/login', dbops.liste);
app.get('/departman/:id/:yil', dbops.departmandetay);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))