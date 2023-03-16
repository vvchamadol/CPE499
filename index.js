const express = require('express');
const app = express();;
const data = require('./web/view');

app.get("/",(req,res) => {
    res.send(data);
})

app.listen(8080,() =>
console.log("http://localhost:8080"));

