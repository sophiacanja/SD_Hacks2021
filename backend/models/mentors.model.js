const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mentorSchema = new Schema ({
    name: { type: String, required: true },
    major: { type: String, required: true},
    gradeYear: { type: Number, required: true },
    college: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true}
}, {
    timestamps: true,
});

const Mentors = mongoose.model('Mentors', mentorSchema);

module.exports = Mentors;