var express = require("express"), cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.listen(1000, () => console.log("Server running on port 3010"));
var ciudades = ["Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago  de Chile", "Mexico DF", "Nuwva york"];
app.get("/ciudades", (req, res, next) => res.json(ciudades.filter((c) => c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)));

var misDestinos= [];
app.get("/my", (req, res, next) => res.json(misDestinos));
app.post("/my", (req, res, next) => {
    console.log(req.body);
    misDestinos.push(req.body.nuevo);
    res.json(misDestinos);

});

app.get("/api/translation", (req, res, nex) => res.json([
    {lang: req.query.lang, key: 'HOLA', value: 'HOLA ' + req.query.lang}
]));
