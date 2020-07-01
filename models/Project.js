const mongoose = require("mongoose"); // since we are using mongoose we have to require it

const projectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    image: String, 
    type: Array,
    course: String,
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    github: String,
    live: String,
    category: String
});

module.exports = mongoose.model("Project", projectSchema);
