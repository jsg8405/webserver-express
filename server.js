const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Javier'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.get('/Data', (req, res) => {


})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});