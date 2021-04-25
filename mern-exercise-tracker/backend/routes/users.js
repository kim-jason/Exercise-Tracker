const router = require('express').Router(); //require() allows you to first import in the Express object, and then .Router() is run on that Express object
let User = require('../models/user.model'); //require() allows you to import whatever is exported from that path

router.route('/').get((req, res) => { //a route that handles HTTP GET requests from /routes/users/
    User.find() //gets all users from the MongoDB database
        .then(users => res.json(users)) //return all users in a JSON format
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { //a route that handles HTTP POST requests from /routes/users/add
    const username = req.body.username; //username is part of the request's body
    const newUser = new User({username}); //create a new instance of User with the provided username

    newUser.save() //save the new User to the MongoDB database
        .then(() => res.json('User added!')) //return confirmation that the new User was added
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; //standard for router files