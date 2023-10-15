var express = require('express');
var jwt = require('jsonwebtoken')
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

var app = express();

const options = {
  definition: {
    openapi : '3.0.0',
    info: {
      title: 'Express APi with Swagger',
      version: '0.1.0',
      description:
      'this is a simple api',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req,res) => {
  const token = jwt.sign(
    {
      userID: 23,
      role: 'admin',
    },
    'koderahasiayangsangatsangatrahasia'
  );
  res.json({
    token: token,
  });
});

var films = require('./routes/films.js');
var categories = require('./routes/categories.js');

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.use('/films', films);
app.use('/categories', categories);

app.listen(3000);