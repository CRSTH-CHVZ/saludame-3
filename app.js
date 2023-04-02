const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const form = "    <form action=\"formulario\" method=\"post\">\n" +
        "        <label for=\"nombre\">Nombre</label>\n" +
        "        <input type=\"text\" name=\"nombre\" id=\"nombre\">\n" +
        "        <input type=\"submit\" value=\"Enviar\">"

    res.send(form);
});

app.post('/formulario', (req, res) => {
    const nombre = req.body.nombre;

    res.send(`<h1>Hola ${ nombre }!!</h1>`)
})

app.listen( 3000, () => {
    console.log("Listening on 3000!")
});