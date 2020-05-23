const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
// const upload = require('../middlewares/multer');

const Project = require("../models/Project.js");

module.exports = (app) => {
    app.get("/projects", (req, res) => {
        res.send("sending all projects");
    });
};

//get all projects
module.exports = (app) => {
    app.get("/projects", (req, res) => {
        Project.find().then((result) => {
            res.send(result);
        });
    });
}; // get all projects

//get student by ID
module.exports = (app) => {
    app.get("/projects/:id", (req, res) => {
        Project.findOne({ _id: req.params.id }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find student with this ID");
            }
        }).catch((err) => res.send(err));
    });
}; // get student by ID

//get projects by course
module.exports = (app) => {
    app.get("/projects/:course", (req, res) => {
        Project.find({ course: req.params.course }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find projects in this course");
            }
        }).catch((err) => res.send(err));
    });
}; // get projects by course

// update project
module.exports = (app) => {
    app.patch("/projects/:id", (req, res) => {
        Project.findById(req.params.id, (err, result) => {
            const updated = {
                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                $push: {
                    type: { $each: req.body.type },
                }, //array
                course: req.body.course,
                studentId: req.body.studentId,
                duration: req.body.duration,
                github: req.body.github,
                live: req.body.live,
            };
            Project.updateOne({ _id: req.params.id }, updated)
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => res.send(err));
        }).catch((err) => res.send("Not found"));
    });
}; // update project

// add new project
module.exports = (app) => {
    app.post("/projects/new", (req, res) => {
        const project = new Project({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            $push: {
                type: { $each: req.body.type },
            }, //array
            course: req.body.course,
            studentId: req.body.studentId,
            duration: req.body.duration,
            github: req.body.github,
            live: req.body.live,
        });
        project
            .save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => res.send(err));
    });
}; // add new project

// delete project
module.exports = (app) => {
    app.delete("/projects/:id", (req, res) => {
        Project.findOne({ _id: req.params.id }, (err, result) => {
            if (result) {
                Project.deleteOne({ _id: req.params.id }, (err) => {
                    res.send("Project deleted");
                });
            } else {
                res.send("Can't delete project. Not found");
            }
        }).catch((err) => res.send(err));
    });
}; // delete project
