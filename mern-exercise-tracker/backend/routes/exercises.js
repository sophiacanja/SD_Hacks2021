const router = require('express').Router(); // requires router
let Exercise = require('../models/exercise.model'); // requires model created (in models)

router.route('/').get((req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises)) // return exercises as json
      .catch(err => res.status(400).json('Error: ' + err));
}); // First endpoint

router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const description = req.body.description;
    const duration = Number(req.body.duration); // convert data to a number
    const date = Date.parse(req.body.date); // convert data to a date data type

    const newExercise = new Exercise({username,
    description,
    duration,
    date,
    }); 

    newExercise.save()
      .then(() => res.json('Exercise added!'))
      .catch(err => res.status(400).json('Error: ' + err));
}); // second endpoint --> post request

module.exports = router; // standard for router files --> exporting router