const mongoose = require("mongoose");
const upload = require("../middlewares/multer");

const Project = require("../models/Project.js");

module.exports = (app) => {
    //get all projects
    app.get("/projects", (req, res) => {
        Project.find().then((result) => {
            res.send(result);
        });
    });
    // get all projects

    //get project by ID
    app.get("/projects/p=:id", (req, res) => {
        Project.findOne({ _id: req.params.id }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find project with this ID");
            }
        }).catch((err) => res.send(err));
    });
    // get project by ID

    //get projects by student
    app.get("/projects/s=:student", (req, res) => {
        Project.find({ studentId: req.params.student }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find projects by this student");
            }
        }).catch((err) => res.send(err));
    });
    // get projects by student

    //get projects by course
    // course needs to be URI encoded with %20 encodeURIComponent()
    app.get("/projects/c=:course", (req, res) => {
        Project.find({ course: req.params.course }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find projects in this course");
            }
        }).catch((err) => res.send(err));
    });
    // get projects by course

    // update project
    app.patch("/projects/p=:id", (req, res) => {
        const _id = req.params.id;

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
            category: req.body.category
        };

        Project.findByIdAndUpdate(
            _id,
            { $set: updated },
            { useFindAndModify: false, upsert: true, new: true },
            (err, result) => {
                if (err) res.send(err);
                res.send(result);
            }
        ).catch((err) => console.log(err));
    });
    // update project

    // add new project
    app.post("/projects/add", (req, res) => {
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
    // add new project

    // save uploaded photo and return file url
    app.post("/projects/photo/getUrl", 
        upload.single("projectPhoto"),
        (req, res) => {
            const base_url = "http://" + req.headers.host + "/";

            let newPhoto = req.file
                ? base_url + req.file.path
                : req.body.projectPhotoUrl;

            res.send(newPhoto);
        }
    );

    // delete project
    app.delete("/projects/p=:id", (req, res) => {
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
    // delete project
}; //close export module

// check auth to edit projects
function auth(req, res, next) {
    if (req.user.authenticated) return next(); // req.query.loggedIm
} // check auth to edit projects
