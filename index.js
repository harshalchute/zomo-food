const express = require('express');
var app = express();

const path = require('path');

var PORT = 8081;

app.use(express.static(path.resolve(__dirname, 'www')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});


app.get('/working-test', (req, res)=>{
    res.json({ code: 200, message: 'node app working!' });
});

app.listen(PORT, ()=>{
    console.log(`node app working port ${PORT}`);
});