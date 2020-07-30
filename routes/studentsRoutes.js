const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const upload = require("../middlewares/multer");

const Student = require("../models/Student.js");

module.exports = (app) => {
    //get all students
    app.get("/students", (req, res) => {
        Student.find().then((result) => {
            res.send(result);
        });
    });
    // get all students

    //get student by ID
    app.get("/students/s=:id", async (req, res) => {
        const _id = req.params.id;
        
        let query = await Student.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(_id)}},
            { $lookup: {
                from: "projects",
                let: { "studentId": "$_id" },
                pipeline: [
                    { $match: {
                        $expr: { $eq: [ '$studentId', { $toObjectId: '$$studentId'} ]}
                    }}
                ],
                as: "projectsDetail"
            }}
        ]);   

        res.send(query[0]);
    });
    // get student by ID

    //get students by course
    // course needs to be URI encoded with %20
    app.get("/students/c=:course", (req, res) => {
        Student.find({ course: req.params.course }, (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send("Can't find students in this course");
            }
        }).catch((err) => res.send(err));
    });
    // get students by course

    // update student
    app.patch("/students/s=:id", (req, res) => {
        const _id = req.params.id;

        const updated = {
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            siteUrl: req.body.siteUrl,
            course: req.body.course,
            blurb: req.body.blurb,
            skills: req.body.skills,
            github: req.body.github,
            behance: req.body.behance,
            linkedIn: req.body.linkedIn,
            instagram: req.body.instagram,
        };

        Student.findByIdAndUpdate(
            _id,
            { $set: updated },
            { useFindAndModify: false, upsert: true, new: true },
            (err, result) => {
                if (err) res.send(err);
                res.send(result);
            }
        ).catch((err) => console.log(err));
    });
    // update student

    //register student
    app.post("/register", (req, res) => {
        const { username, email, password } = req.body;
        Student.findOne({ username }, (err, result) => {
            if (result) {
                res.send("Username taken. Try another one!");
            } else {
                const hash = bcryptjs.hashSync(password);
                const student = new Student({
                    _id: new mongoose.Types.ObjectId(),
                    username,
                    password: hash,
                    email,
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
    // register student

    //login student
    app.post("/login", (req, res) => {
        Student.findOne({ username: req.body.username }, async (err, result) => {
            if (result) {
                if (bcryptjs.compareSync(req.body.password, result.password)) {
                    let query = await Student.aggregate([
                        { $match: { _id: mongoose.Types.ObjectId(result._id)}},
                        { $lookup: {
                            from: "projects",
                            let: { "studentId": "$_id" },
                            pipeline: [
                                { $match: {
                                    $expr: { $eq: [ '$studentId', { $toObjectId: '$$studentId'} ]}
                                }}
                            ],
                            as: "projectsDetail"
                        }}
                    ]);   
                    
                    // console.log(query);
                    res.send(query[0]);
                } else {
                    res.send("Not authorised. Incorrect password");
                }
            } else {
                res.send("Student not found");
            }
        });
    });
    // login student

    // change profile photo
    app.patch(
        "/students/s=:id/photo/update/",
        upload.single("profilePhoto"),
        (req, res, next) => {
            const _studentId = req.params.id;

            let newPhoto = req.file
                ? req.file.path
                : req.body.profilePhotoUrl;

            let updatedInfo = { photoUrl: newPhoto };

            Student.findByIdAndUpdate(
                _studentId,
                { $set: updatedInfo },
                { useFindAndModify: false, upsert: true, new: true },
                (err, result) => {
                    if (err) res.send(err);
                    res.send(result);
                }
            ).catch((err) => console.log(err));
        }
    );
    // change profile photo
}; // close export module
