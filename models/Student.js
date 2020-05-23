const mongoose = require("mongoose"); // since we are using mongoose we have to require it

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    name: String,
    email: String,
    siteUrl: String,
    course: String,
    blurb: String,
    skills: Array,
    careerMotivation: String,
    projects: Array,
    github: String,
    behance: String,
    linkedIn: String,
    instagram: String,
});

module.exports = mongoose.model("Student", studentSchema);
