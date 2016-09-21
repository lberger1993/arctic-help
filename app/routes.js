
var newUser = require('./models/user');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
var path = require('path');

module.exports = function (app) {
    
    function failAndExit(err) {
     console.error(err.stack);
     process.exit(1);
    }
    // api ---------------------------------------------------------------------
     
    // get all branches in db --------------------------------------------------
    app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
    function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount() {
 
    console.log("AM I HEERE?")
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;
    if ('zipcode' in req.body.customData){
      req.user.customData.zipcode = req.body.customData.zipcode;
    }

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      console.log(res.user);
      res.end();
    });
  }

  if (req.body.password) {
    var application = req.app.get('stormpathApplication');
    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});


app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);

};