const express = require('express')
const app = express()
const port = 3000
const login = require("./loginOps")
const bp = require('body-parser');

app.use(bp.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/login', login.userLogin);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))