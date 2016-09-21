var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var ora = require('ora');
var mongoose = require('mongoose'); 
var database = require('./config/database');
var methodOverride = require('method-override');



var port = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);


app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/css', express.static(__dirname + '/src/css'));

// routes ======================================================================
require('./app/routes.js')(app);

app.use(stormpath.init(app, {
  // Disable logging until startup, so that we can catch errors
  // and display them nicely.
  debug: 'none',
  web: {
    produces: ['application/json'],
    me: {
      expand: {
        customData: true
      }
    },
    register: {
      form: {
        fields: {
          color: {
            enabled: true,
            label: 'Color',
            placeholder: 'E.g. blue',
            type: 'text'
          }, 
         	zipcode: {
            enabled: true,
            label: 'zipcode',
            placeholder: 'H2X1V9',
            type: 'text'
          }
        }
      }
    }
  }
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});


app.listen(port, function () {
  app.on('stormpath.ready', function () {
    console.log('\nListening at http://localhost:' + port);
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
});