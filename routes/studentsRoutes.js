const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
// const upload = require('../middlewares/multer');

const Student = require("../models/Student.js");

// module.exports = (app) => {
//     app.get("/students", (req, res) => {
//         res.send("sending all students");
//     });
// };

//get all students
module.exports = (app) => {
    app.get("/students", (req, res) => {
        Student.find().then((result) => {
            res.send(result);
        });
    });
}; // get all students

// get student by ID
module.exports = (app) => {
    app.get("/students/:id", (req, res) => {
        Student.findOne({ _id: req.params.id }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find student with this ID");
            }
        }).catch((err) => res.send(err));
    });
}; // get student by ID

//get student by course
module.exports = (app) => {
    app.get("/students/:course", (req, res) => {
        Student.find({ course: req.params.course }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find students in this course");
            }
        }).catch((err) => res.send(err));
    });
}; // get student by course

// update student
module.exports = (app) => {
    app.patch("/students/:id", (req, res) => {
        Student.findById(req.params.id, (err, result) => {
            const updated = {
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                siteUrl: req.body.siteUrl,
                course: req.body.course,
                blurb: req.body.blurb,
                $push: {
                    skills: { $each: req.body.skills },
                }, //array
                careermotivation: req.body.careermotivation,
                $push: {
                    projects: { $each: req.body.projects },
                }, // array
                github: req.body.github,
                behance: req.body.behance,
                linkedIn: req.body.linkedIn,
                instagram: req.body.instagram,
            };
            Student.updateOne({ _id: req.params.id }, updated)
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => res.send(err));
        }).catch((err) => res.send("Not found"));
    });
}; // update student

//register student
module.exports = (app) => {
    app.post("/register", (req, res) => {
        Student.findOne({ username: req.body.username }, (err, result) => {
            if (result) {
                res.send(
                    "This username is already taken. Please try another one"
                );
            } else {
                const hash = bcryptjs.hashSync(req.body.password);
                const student = new Student({
                    _id: new mongoose.Types.ObjectId(),
                    username: req.body.username,
                    password: hash,
                    name: req.body.name,
                    email: req.body.email,
                    siteUrl: req.body.siteUrl,
                    course: req.body.course,
                    blurb: req.body.blurb,
                    $push: {
                        skills: { $each: req.body.skills },
                    }, //array
                    careermotivation: req.body.careermotivation,
                    $push: {
                        projects: { $each: req.body.projects },
                    }, // array
                    github: req.body.github,
                    behance: req.body.behance,
                    linkedIn: req.body.linkedIn,
                    instagram: req.body.instagram,
                });
                student
                    .save()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => res.send(err));
            }
        });
    });
}; // register student

//login student
module.exports = (app) => {
    app.post("/login", (req, res) => {
        Student.findOne({ username: req.body.username }, (err, result) => {
            if (result) {
                if (bcryptjs.compareSync(req.body.password, result.password)) {
                    res.send(result);
                } else {
                    res.send("Not authorised. Incorrect password");
                }
            } else {
                res.send("Student not found");
            }
        });
    });
}; // login student
