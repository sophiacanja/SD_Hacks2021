const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find() // Mongoose method --> gets all users in atlas database
    .then(users => res.json(users)) //return the users that were recieved in database
    .catch(err => res.status(400).json('Error: ' + err));
}); // First endpoint that handles http requests --> having a / at the end 

router.route('/add').post((req,res) => {
    const username = req.body.username; 

    const newUser = new User({username}); // new instance of user

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
}); // second endpoint --> post request

module.exports = router; // standard for router files --> exporting router