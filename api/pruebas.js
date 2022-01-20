const express = require('express');
const app = express();
const morgan = require('morgan') //middleware logger

//Middleware:
app.use(express.json()) //parsear el body de las solicitudes
app.use(morgan('dev'));



app.get('/', function(req, res, next) {
  res.send('RUTA GET')
})

app.use('/', function(req,res, next ){
  console.log('Hicieron un Request a '+ req.url);
  next(); // pasa al siguiente get ligado a '/' y arroja 'RUTA GET'
});

app.get('/home', function(req, res, next) {
    res.status(200).send('RUTA HOME')
})

app.get('/json', function(req, res) {
    var obj = {
        nombre: 'David',
        app: 'Vazquez'
    }

    res.json(obj)
})

	
app.get('/api/:id', function(req, res) {
    console.log(req)
	res.json( { parametro: req.params.id } );
})


app.post('/nuevoAlumno', function(req, res) {
    console.log(req.body)
    res.sendStatus(201) //CREADO!
})

app.get('/datos', function(req, res) {
    console.log(req)
	res.json( req.query );
});

//Middleware
//var jsonParser = express.json()
app.post('/formjson', function (req, res) {
  res.json( req.body )
});

var urlencodedParser = express.urlencoded({ extended: false })
app.post('/form', urlencodedParser, function (req, res) {
  res.json( req.body )
});

app.get("/form", function (req, res) {
    res.send(
      '<html><head> \
              <link href="/assets/style.css" rel="stylesheet"> \
              </head><body>\
                  <form method="POST" action="/form">\
                  Nombre <input name="nombre" type="text"><br>\
                  Apellido <input name="apellido" type="text"><br>\
                  Curso <input name="curso" type="text"><br>\
                  <input type="submit">\
                  </form>\
              </body></html>'
    );
  });
  
  
  app.use(express.urlencoded({ extended: false }));
  app.post("/form", function (req, res) {
    res.json(req.body);
    
  });
  

  /*
  app.get("/form", function (req, res, next) {
    res.send('tus datos se recibieron con exito')
    next();
  });
  */
// console.log(app)

//poner a escuchar en un puerto
app.listen(3000, console.log("Servidor en escucha!!!"));


/* app.get('la ruta', function(funcion de callback que son: req, res, next){
        res.send('l respuesta')
})*/

//CRUD

//GET --> Solicito info
// POST --> Creo Data  --> le acompana un body o paquete de info
// PUT --> Editar o modificar data
// DELETE --> Borro data


//Enviar datos al servidor:

//params, body, query