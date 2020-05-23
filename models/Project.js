const mongoose = require("mongoose"); // since we are using mongoose we have to require it

const projectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    image: String, //could be array?
    type: Array,
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    duration: String,
    gitub: String,
    live: String,
});

module.exports = mongoose.model("Project", projectSchema);
