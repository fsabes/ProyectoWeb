"use strict";
const express = require('express');

let router = express.Router();

const herosInfo = require('../build/hero_names.json');
router.get('/', (req,res) =>{//Enruta las solicitudes HTTP GET a la ruta de acceso especificada con las funciones de devolución de llamada especificadas.
    res.render('dota', { heros : herosInfo });
})
module.exports = router;