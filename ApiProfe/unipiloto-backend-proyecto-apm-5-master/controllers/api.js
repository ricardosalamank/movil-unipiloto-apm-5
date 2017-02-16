'use strict';
var code = require('../app')
    , obj_to_xml = require('easyxml');


module.exports = function( app, db ) {
    // --------------------------- API V1 para el modelo "User" --------------------------------------- //

    // Acceso al sistema
    var loginUser = function( req, res ) {

      console.log('POST - login users');

      db.get('SELECT * FROM user WHERE email = ? AND password = ?',
          [
              req.body.email,
              req.body.password
          ],

          function( err, rows ) {

            console.log('POST login user with email: ' + req.body.email);
             /*
             * Set de cabeceras para poder permitir acceso
             * de peticiones AJAX de un request externo
             * en estw caso la App
             * */
            res.header( 'Access-Control-Allow-Origin', '*' );
            res.header( 'Access-Control-Allow-Methods', 'POST' );
            res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *' );

            if ( rows ) {

              // Agregando el cookie
              rows.cookie = code.cookie;

              console.log( rows );

              // Adicionando a la cabecera `Content-Type` de `text/json`
              res.header( 'Content-Type', 'application/json' ).json( rows );

            // Cuando ocurre algún error
            } else if ( err ) {

              // Cuando genera un error la consulta
              res.header( 'Content-Type', 'application/json' ).send( { "error": err } );

            } else {

              // Error desconocido
              res.header( 'Content-Type', 'application/json' ).send( { "error": 400 });

            }
  	   });
   };



    // Buscando todos los usuarios y enviando la lista
    var findAllUsers = function( req, res ) {

        console.log( 'GET - read all users' );

        // Query sobre todos los elementos de la tabla `user`
        db.all('SELECT * FROM user', function( err, rows ) {

            //Set sobre la cabecera de la peticion
            console.log('GET All Users');

            /*
             * Set de cabeceras para poder permitir acceso
             * de peticiones AJAX de un request externo
             * en estw caso la App
             * */
            res.header( 'Access-Control-Allow-Origin', '*' );

            res.header( 'Access-Control-Allow-Methods', 'GET' );

            res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *' );

            // Si la consulta es correcta
            if( rows ) {

                // Cuando el `request` contiene en la cabecera `application/json`
                if ( req.accepts( 'application/json') ) {

                    // Iterando sobre el query que entrega el driver de `SQLite`
                    rows.forEach(function (row) {

                            // Verificando los elementos que entrega el query
                            console.log(row.id + ": " + row.firstname);
                            row.url = "http:127.0.0.1:7070/api/v1/user/profile/" + row.email;
                        });

                    // Adicionando a la cabecera `Content-Type` de `text/json`
                    res.header('Content-Type', 'application/json').json(rows);

                // Cuando el `request` contiene en la cabecera `application/xml`
                } else if ( req.accepts('application/xml') ) {

                    // Iterando sobre el query que entrega el driver de `SQLite`
                    rows.forEach(function(row) {

                        // Verificando los elementos que entrega el query
                        console.log(row.id + ": " + row.firstname);

                    });

                    // Configurando el objeto a XML
                    obj_to_xml.configure({
                        singularizeChildren: true,
                        underscoreAttributes: true,
                        rootElement: 'users',
                        dateFormat: 'ISO',
                        indent: 2,
                        manifest: true
                    });


                    /*
                     * Convirtiendo el objeto a XML con `easyxml`
                     * y con respecto a los valores de configuración
                    */
                    var users = obj_to_xml.render(rows);
                    console.log(users);

                    // Adicionando a la cabecera `Content-Type` de `text/xml`
                    res.set( 'Content-Type', 'application/xml' );
                    // Enviando el DOM del query que genera la consulta
                    res.send(users);

                } else {

                      // Cuando no cumple con las peticiones
                      res.header('Content-Type', 'application/json').send({"error":404});

                }

            // Cuando ocurre algún error
            } else if( err ) {

                // Cuando genera un error la consulta
                res.header('Content-Type', 'application/json').send({"error":err});

            } else {

                // Error desconocido
                res.header('Content-Type', 'application/json').send({"error":400});

            }
  	    });
	};


   // Buscando un usuario especifico por "email"
   var findUser = function(req, res){

       console.log('GET - read user by email= ' + req.params.email);

       db.get('SELECT * FROM user WHERE email = ?',

           [ req.params.email ],

           function(err, rows) {

               console.log('GET user with email: ' + req.params.email);

               /*
                * Set de cabeceras para poder permitir acceso
                * de peticiones AJAX de un request externo
                * en estw caso la App
                * */
               res.header( 'Access-Control-Allow-Origin', '*' );

               res.header( 'Access-Control-Allow-Methods', 'GET' );

               res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *' );

                if ( rows ) {

                    console.log( rows );

                    // Cuando el `request` contiene en la cabecera `application/json`

                    if ( req.accepts( 'application/json' ) ) {

                        // Adicionando a la cabecera `Content-Type` de `text/json`

                        res.header( 'Content-Type', 'text/json' ).json( rows );


                    // Cuando el `request` contiene en la cabecera `application/xml`
                    } else if ( req.accepts( 'application/xml' ) ) {

                        // Iterando sobre el query que entrega el driver de `SQLite`
                        rows.forEach(function (row) {

                            // Verificando los elementos que entrega el query
                            console.log(row.id + ": " + row.firstname);
                        });


                        // Configurando el objeto a XML
                        obj_to_xml.configure({
                              singularizeChildren: true,
                              underscoreAttributes: true,
                              rootElement: 'users',
                              dateFormat: 'ISO',
                              indent: 2,
                              manifest: true
                        });


                        /*
                        * Convirtiendo el objeto a XML con `easyxml`
                        * y con respecto a los valores de configuración
                        */
                        var users = obj_to_xml.render(rows);

                            console.log(users);

                        // Adicionando a la cabecera `Content-Type` de `application/xml`
                        res.set('Content-Type', 'application/xml');

                        // Enviando el DOM del query que genera la consulta
                        res.send(users);

                    } else {

                        // Cuando no cumple con las peticiones
                        res.header('Content-Type', 'application/json').send({"error":404});

                    }

                // Cuando ocurre algún error
                } else if (err) {

                  // Cuando genera un error la consulta
                  res.header('Content-Type', 'application/json').send({"error":err});

                } else {

                  // Error desconocido
                  res.header('Content-Type', 'application/json').send({"error":400});

                }

           });
   };


   // Creando un usuario con todos los campos:
   // curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"firstname": "alejandro", "email": "al@ro.co", "lastname": "romero", "phone":"334334", "password": "!234"}' http://127.0.0.1:7070/api/v1/user/create
   var createUser = function(req, res){

       var stmt = db.prepare('INSERT INTO user (email, password, firstname, lastname, phone) VALUES (?, ?, ?, ?, ?)');

       stmt.run(
           [
               req.body.email,
               req.body.password,
               req.body.firstname,
               req.body.lastname,
               req.body.phone
           ],

           function(err, rows){

               /*
                * Set de cabeceras para poder permitir acceso
                * de peticiones AJAX de un request externo
                * en estw caso la App
                * */
               res.header( 'Access-Control-Allow-Origin', '*' );

               res.header( 'Access-Control-Allow-Methods', 'POST' );

               res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *' );

               if(err) {

                    // Cuando genera un error la consulta
                    res.header( 'Content-Type', 'application/json' ).send( { "error": err } );

               } else {

                    db.get('SELECT * FROM user WHERE email = ?',

                        [req.body.email],

                        function(err, rows) {

                            if ( rows ) {

                              // Adicionando el cookie para la sesión de los usuarios
                              rows.cookie = code.cookie;

                              res.header('Content-Type', 'application/json').status(201).json( rows );

                            } else if (err) {

                              res.header('Content-Type', 'application/json').send( { "error":err } );

                            } else {

                              res.header('Content-Type', 'application/json').send( { "error":400 } );
                            }

                        });
               }

           });
   };


   // Actualizando un usuario, buscado por email y sin password
   var updateUser = function(req, res){

        var stmt = db.prepare('UPDATE user SET firstname = ?, ' +
            'lastname = ?, ' +
            'phone = ? ' +
            'WHERE email = ?');

        stmt.run(
            [
                req.body.firstname,
                req.body.lastname,
                req.body.phone,
                req.params.email
            ],

            function(err, rows){

                console.log('POST - update User with data = \n {' + '\n email : ' + req.params.email + '\n firstname : ' + req.body.firstname + '\n lastname : ' + req.body.lastname + '\n phone : ' + req.body.phone +'\n }');

                /*
                 * Set de cabeceras para poder permitir acceso
                 * de peticiones AJAX de un request externo
                 * en estw caso la App
                 * */
                res.header('Access-Control-Allow-Origin', '*');

                res.header('Access-Control-Allow-Methods', 'POST, PUT');

                res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');


                if(err){

                    // Cuando genera un error la consulta
                    res.header('Content-Type', 'application/json').send({"error":err});

                } else{

                    db.get('SELECT * FROM user WHERE email = ?',

                        [req.params.email],

                        function(err, rows) {

                            if (rows) {

                                console.log('POST - update User with data = \n {' +
                                                                                '\n email : ' + req.params.email +
                                                                                '\n firstname : ' + req.body.firstname +
                                                                                '\n lastname : ' + req.body.lastname +
                                                                                '\n phone : ' + req.body.phone +
                                                                            '\n }');

                                rows.cookie = code.cookie;

                                res.header('Content-Type', 'application/json').json(rows);

                            } else if (err) {

                                res.header('Content-Type', 'application/json').send({"error":err});

                            } else {

                                res.header('Content-Type', 'application/json').send({"error":400});
                            }

                        });
                }

            });
   };



   // Eliminando usuario por correo
   var deleteUser = function(req, res){

       console.log('DELETE user with email : ' + req.params.email);

       /*
        * Set de cabeceras para poder permitir acceso
        * de peticiones AJAX de un request externo
        * en estw caso la App
        * */

       res.header('Access-Control-Allow-Origin', '*');

       res.header('Access-Control-Allow-Methods', 'DELETE');

       res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

       var stmt = db.prepare('DELETE FROM user WHERE email = ?');

       stmt.run(req.params.email);

       res.header('Content-Type', 'application/json').status(204).json({"delete_user": req.params.email});
   };



   // Actualizando un usuario, buscado por email y sin password
   var updatePasswordUser = function(req, res){

       var stmt = db.prepare('UPDATE user SET password = ? WHERE email = ?');

       stmt.run(
           [
               req.body.password,
               req.params.email
           ],

           function(err, rows){

               console.log('POST - update User with data = \n {' +
                   '\n email : ' + req.params.email +
                   '\n password : ' + req.body.password +'\n }');

               /*
                * Set de cabeceras para poder permitir acceso
                * de peticiones AJAX de un request externo
                * en estw caso la App
                * */
               res.header('Access-Control-Allow-Origin', '*');

               res.header('Access-Control-Allow-Methods', 'POST, PUT');

               res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

              if( err ) {

                  // Cuando genera un error la consulta
                  res.header('Content-Type', 'applicatioapplication/json').send({"error":err});

              } else{

                  db.get('SELECT * FROM user WHERE email = ?',
                      [ req.params.email ],

                      function(err, rows) {

                          if (rows) {

                              console.log('POST - update User with data = \n {' +
                                                                         '\n email : ' + req.params.email +
                                                                         '\n password : ' + req.body.password +
                                                                         '\n }');

                              rows.cookie = code.cookie;

                              res.header('Content-Type', 'application/json').json(rows);

                          } else if (err) {

                              res.header('Content-Type', 'application/json').send({"error":err});

                          } else {

                              res.header('Content-Type', 'application/json').send({"error":400});
                          }

                      });

              }

           });
   };

    //Links de las rutas y las funciones
    // URI para crear usuario
    app.post('/api/v1/user/sign-up', createUser);

    // URI ingresar a la app
    app.post('/api/v1/user/sign-in', loginUser);

    // URI para traer todos los usuarios
    app.get('/api/v1/user/list', findAllUsers);

    // URI para buscar usuario especifico por email
    app.get('/api/v1/user/profile/:email', findUser);

    // URI para actualizar usuario
    app.put('/api/v1/user/update/:email', updateUser);

    // URI para actualizar usuario
    app.post('/api/v1/user/forgot-password/:email', updatePasswordUser);

    // URI para eliminar usuario
    app.delete('/api/v1/user/delete/:email', deleteUser);



// --------------------------- API V1 para el modelo "Product" --------------------------------------- //

    // Buscando todos los productos y retornando
    var findAllProducts = function(req, res){

        console.log("GET - read all Products");

        db.all("SELECT * FROM product", function(err, rows) {

            /*
             * Set de cabeceras para poder permitir acceso
             * de peticiones AJAX de un request externo
             * en estw caso la App
             * */
            res.header('Access-Control-Allow-Origin', '*');

            res.header('Access-Control-Allow-Methods', 'GET');

            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');


            if(rows){

                // Iterando sobre el `query`

                rows.forEach(function (row) {

                    console.log(row.id + ': ' + row.name);
                    row.url = "http:127.0.0.1:7070/api/v1/product/detail/" + row.id;
                });

                // Adicionando a la cabecera `Content-Type` de `application/json`
                res.header( 'Content-Type', 'application/json' ).json( rows );

            // Cuando ocurre algún error
            } else if (err) {

                // Cuando genera un error la consulta
                res.header( 'Content-Type', 'application/json' ).send( { "error": err } );

            } else {
            // Error desconocido
            res.header( 'Content-Type', 'application/json' ).send( { "error": 400 } );
          }

        });
    };


    // Buscando producto por ID especifico
    var findProduct = function(req, res){

        console.log( 'GET - read product by id : ' + req.params.id );

        db.get('SELECT * FROM product WHERE id = ?',

            [ req.params.id ],


            function(err, rows) {

                /*
                 * Set de cabeceras para poder permitir acceso
                 * de peticiones AJAX de un request externo
                 * en estw caso la App
                 * */
                res.header('Access-Control-Allow-Origin', '*');

                res.header('Access-Control-Allow-Methods', 'GET');

                res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

                if (err) {

                    // Cuando genera un error la consulta
                    res.header( 'Content-Type', 'application/json' ).send( { "error": err } );

                } else {

                    // Adicionando a la cabecera `Content-Type` de `application/json`

                    res.header( 'Content-Type', 'application/json' ).json( rows );

                }
            });
    };

    // Crendo producto con todos los campos especificos
    var createProduct = function( req, res ){

        console.log('POST - save Product with data = \n {' +
                    '\n name : ' + req.body.name +
                    '\n type : ' + req.body.type +
                    '\n price : ' + req.body.price +
                    '\n type : ' + req.body.type +
                    '\n quantity : ' + req.body.quantity +
            '\n }');

        /*
         * Set de cabeceras para poder permitir acceso
         * de peticiones AJAX de un request externo
         * en estw caso la App
         *
        res.header('Access-Control-Allow-Origin', '*');

        res.header('Access-Control-Allow-Methods', 'POST');

        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

         */

        var stmt = db.prepare('INSERT INTO product (name, type, quantity, price) VALUES (?, ?, ?, ?)');

        stmt.run(
            [
                req.body.name,
                req.body.type,
                req.body.quantity,
                req.body.price
            ],

            function( rows, err ) {

                if(err){
                    // Cuando genera un error la consulta
                    res.header('Content-Type', 'application/json').send({"error":err});

                } else {

                    db.get('SELECT * FROM product WHERE name = ?',

                        [ req.body.name ],

                        function(err, rows) {

                            if (err) {

                                // Cuando genera un error la consulta
                                res.header('Content-Type', 'application/json').send({"error":err});


                            } else {


                                console.log('POST - save Product with data = \n {' +
                                                                                '\n name : ' + req.body.name +
                                                                                '\n type : ' + req.body.type +
                                                                                '\n price : ' + req.body.price +
                                                                                '\n quantity : ' + req.body.quantity +
                                                                            '\n }');

                                res.header( 'Content-Type', 'application/json' ).status(201).json( rows );

                            }

                        });

                }

            });

    };

    // Actualizando producto por id
    var updateProduct = function(req, res) {

        console.log('PUT - update Product with data = \n {' +
                                                         '\n name : ' + req.body.name +
                                                         '\n type : ' + req.body.type +
                                                         '\n quantity : ' + req.body.quantity +
                                                         '\n price : ' + req.body.price + '\n ' +
                                                        '}');

        /*
         * Set de cabeceras para poder permitir acceso
         * de peticiones AJAX de un request externo
         * en estw caso la App
         **/
        res.header('Access-Control-Allow-Origin', '*');

        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS, POST');

        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');


        var stmt = db.prepare("UPDATE product SET name = ?, type = ?, quantity = ?, price = ? WHERE id = ?");

        stmt.run(
            [
                req.body.name,
                req.body.type,
                req.body.quantity,
                req.body.price,
                req.params.id
            ],

            function( rows, err ) {


                if(err) {

                    // Cuando genera un error la consulta
                    res.header( 'Content-Type', 'application/json' ).send( { "error": err } );

                } else {

                    db.get('SELECT * FROM product WHERE name = ?',

                        [
                            req.body.name
                        ],

                        function(err, rows) {

                            if (rows) {

                                console.log('POST - Update Product with data = \n {' +
                                                                                  '\n name : ' + req.body.name +
                                                                                  '\n type : ' + req.body.type +
                                                                                  '\n quantity : ' + req.body.quantity +
                                                                                  '\n price : ' + req.body.price +
                                                                              '\n }');

                                res.header( 'Content-Type', 'application/json' ).json( rows );


                            } else if (err) {

                                // Cuando genera un error la consulta
                                res.header('Content-Type', 'application/json').send({"error":err});

                            } else {

                                // Error desconocido
                                res.header('Content-Type', 'application/json').send({"error":400});

                            }
                        });
                }
            });
  };


    // Eliminando producto por ID especifico
    var deleteProduct = function( req, res ) {

        console.log('DELETE product with id = ' + req.params.id);

        /*
         * Set de cabeceras para poder permitir acceso
         * de peticiones AJAX de un request externo
         * en estw caso la App
         * */
        res.header('Access-Control-Allow-Origin', '*');

        res.header('Access-Control-Allow-Methods', 'DELETE');

        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

        var stmt = db.prepare('DELETE FROM product WHERE id = ?');

        stmt.run(req.params.id);

        res.header( 'Content-Type', 'application/json' ).status(204).send( { 'delete_product ' :req.params.id } );

    };

  //Link para las resolución de URLs y la gestión de las mismas
  // URI para traer todos los productos de la base de datos

    app.get('/api/v1/product/list', findAllProducts);
    // URI para crear un producto
    app.post('/api/v1/product/create', createProduct);

    // URI para buscar por ID especifico
    app.get('/api/v1/product/detail/:id', findProduct);

    // URI para actualizar un producto
    app.put('/api/v1/product/update/:id', updateProduct);

    // URI para eliminar un producto
    app.delete('/api/v1/product/delete/:id', deleteProduct);

    // Close DB
    var closeDb = function() {

        console.log("closeDb");

        db.close();

    };
};
