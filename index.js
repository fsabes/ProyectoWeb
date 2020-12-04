"use strict";

const express = require('express');//importa el package express
const setting = require('./config/setting');// funcion de configuracion de la app
const app = setting(express()); //  -express()-  :  Crea una aplicación Express.

//routers
const routerHome = require('./router/routerHome');
const routerDota = require('./router/routerDota');
const routerLol =require('./router/routerLol'); 
//use routers
app.use('/',routerHome);
app.use('/dota2', routerDota);
app.use('/leagueOfLegends', routerLol);


app.listen(app.get('port'));//Enlaza y escucha las conexiones en el host y el puerto especificados.