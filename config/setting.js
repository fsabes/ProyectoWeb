const exphbs = require('express-handlebars');
const path = require('path');
const express =require('express');

module.exports = function (app) { // funcion que configura la app 

//-app.set- Puede almacenar cualquier valor que desee, pero ciertos nombres se pueden usar para configurar el comportamiento del servidor
app.set('port', '3000');// variable puerto.

// establecer de plantillas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    extname : '.hbs'
}));
app.set('view engine', '.hbs');

//archivos staticos
app.use("/public", express.static(path.join(__dirname, "../public")));
    return app;
}