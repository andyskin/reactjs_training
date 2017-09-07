const express = require ('express'),
         path = require('path'),
         createWebpackMiddleware = require('webpack-express-middleware'),
         config = require('../webpack.config'),
         compiler = require('webpack')(config);

const app = express(),
      middleware = createWebpackMiddleware (compiler, config);;

middleware(app);

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');

app.listen(app.get('port'), app.get('host'), middleware.listen);