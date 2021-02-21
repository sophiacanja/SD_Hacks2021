const router = require('express').Router(); // requires router
let Mentors = require('../models/mentors.model'); // requires model created (in models)

router.route('/').get((req, res) => {
    Mentors.find()
      .then(mentor => res.json(mentor)) // return mentors as json
      .catch(err => res.status(400).json('Error: ' + err));
}); // First endpoint

router.route('/add').post((req, res) => {
    const name = req.body.name; 
    const major = req.body.major;
    const grade = req.body.grade;
    const college = req.body.college;
    const city = req.body.city; 
    const description = req.body.description;

    const newMentors = new Mentors({name,
    major,
    grade,
    college,
    city,
    description,
    }); 

    newMentor.save()
      .then(() => res.json('Mentor added!'))
      .catch(err => res.status(400).json('Error: ' + err));
}); // second endpoint --> post request

router.route('/:id').get((req, res) => { // variable --> object id
    Mentors.findById(req.params.id) // finds specific Mentor
      .then(mentor => res.json(mentor))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { // delete request --> deletes from db
    Mentor.findByIdAndDelete(req.params.id)
      .then(mentor => res.json('Mentor deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Mentors.findById(req.params.id) // Changes info of an exercise that already exists
      .then(mentor => {
          mentor.name = req.body.name;
          mentor.major = req.body.major;
          mentor.grade = req.body.grade;
          mentor.college = req.body.college;
          mentor.city = req.body.city;
          mentor.description = req.body.description;

          mentor.save()
            .then(() => res.json('Mentor updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; // standard for router files --> exporting router