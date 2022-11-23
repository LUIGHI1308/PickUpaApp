
const express = require('express')
const INIT_DB = require('./Config/DB')
const app = express()
const port = 3001
const cors = require('cors')
const UserRouter = require('./App/Routes/user')

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
    'http://localhost:8200',
  ];
  
  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
  };
  
  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));
  
  app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
  });


app.use(UserRouter)

// then in your app

app.listen(port, () => {

    console.log('La App esta en linea')
})

INIT_DB()

