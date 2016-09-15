var Branch_Table = require('./models/branch_table');
var Child = require('./models/child');




module.exports = function (app) {

    // api ---------------------------------------------------------------------
     
    // get all branches in db --------------------------------------------------
     app.get('/api/get_clothing_children', function(req, res) {
            Child.find(function(err, branches) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(branches); // return all todos in JSON format
        });
    });


    app.post('/api/add_branch', function (req, res) {
       
        // Creates a user with email 
        
        // need to convert zip code to lat long 
        console.log("Will convert here");

        // Branch_Table.create({
        //     email_address: req.body.email_address
        // }, function (err, todo) {
        //     if (err)
        //         res.send(err);
        //     // get and return all the todos after you create another
            
        // });

    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/src/client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};