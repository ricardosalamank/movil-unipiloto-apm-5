'use strict';
// Importando modulos y librerias en Node.JS
var express = require('express')
    , http = require('http')
    , path = require('path')
    , logger = require('morgan')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , favicon = require('static-favicon')
    , cons = require('consolidate')
    , debug = require('debug')('app-final')
    , cors = require('express-cors');

// Instanciando aplicación
var app = express();

// tratamiento para el favicon -> no necesario para el ejercicio
app.use(favicon());


// motor templates con este consolidate
app.engine( 'html', cons.swig );


// Tipo de templates que se usaran
app.set( 'view engine', 'html' );


// Path o directorio lodcal donde estaran estos documentos html
app.set( 'views', path.join( __dirname, 'views' ) );

// Parseo y encodificación de las URLs
app.use(logger('development'));

app.use(cors({
    allowedOrigins: ['*']
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded(
  { extended: true }
));

app.use(cookieParser());


// Resolución de estaticos en Express.JS
app.use(express.static(path.join(__dirname, 'public')));

app.use(app.router);


// Llamado del modulo "SQLite3"
var sqlite3 = require("sqlite3").verbose();


// Creación del documento phonegap.sqlite
var db = new sqlite3.Database("cordova.db");


// Inicializando la base de datos
db.serialize(function() {


    // Creando tabla de usuarios => "user"
    db.run('CREATE TABLE IF NOT EXISTS user (id integer primary key autoincrement,' +
                                            'email text,' +
                                            'password text,' +
                                            'firstname text,' +
                                            'lastname text,' +
                                            'phone text)');


    // Creando tabla de productos "product"
    db.run('CREATE TABLE IF NOT EXISTS product (id integer primary key autoincrement, ' +
                                                'name text,' +
                                                'type text,' +
                                                'quantity real,' +
                                                'price real)');


    db.get('SELECT * FROM user WHERE email = "admin@admin.com"', function(err, rows) {
      if(rows){
        console.log(rows);
      } else if(err){
        console.log('Ocurrio un error', err);
      } else {

        var stmt = db.prepare('INSERT INTO user (email, password, firstname, lastname, phone) VALUES (?, ?, ?, ?, ?)');


        // Ingresando datos de prueba para User
        stmt.run('admin@admin.com',
                 'admin',
                 'admin',
                 'server',
                 '1234566775');


        var stmt = db.prepare('INSERT INTO product (name, type, quantity, price) VALUES (?, ?, ?, ?)');


        // Ingresando datos de prueba para Product
        stmt.run('Motorola',
                 'Telefono Móvil',
                 100.0,
                 567000.0);

          stmt.finalize();
      }

    });

});


//URLs a resolver
app.get('/', function(req, res) {

    res.render('index', {'name':'Test App'});

});


/* Manejo de errores en desarrollo */
if ( app.get('env') === 'development' ) {

    app.use(function( err, req, res, next ) {

        res.render('error', {

            message: err.message,

            error: err

        });

    });

}


// uitilizando routes para resolver las URLs de la API
var routes = require('./controllers/api')(app, db);


// Exportando y publicando el valor "Cookie"
module.exports.cookie = '86d049d72a63027eb736fe9b7e240e28';


// Exportanto el objeto "app" con todas sus configuraciones
app.set('port', process.env.PORT || 7070);


var server = app.listen(app.get('port'), function() {
  debug('Express escucha por el puerto ' + server.address().port);
});
