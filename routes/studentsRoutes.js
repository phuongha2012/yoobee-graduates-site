const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
// const upload = require('../middlewares/multer');


// const Student = require('../models/student.js');

module.exports = (app) => {

    app.get('/students', (req, res) => {
        res.send('sending all students');
    })

}