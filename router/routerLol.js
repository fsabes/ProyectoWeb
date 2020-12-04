"use strict"
const express = require('express');

const request = require('request');



const router = express.Router();

const herosInfo = require('../build/hero_names.json');

router.get("/", (req,res) =>{
  res.render('lol');
})

module.exports = router;