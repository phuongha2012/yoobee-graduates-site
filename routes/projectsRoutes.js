const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
// const upload = require('../middlewares/multer');


// const Student = require('../models/project.js');

module.exports = (app) => {

    app.get('/projects', (req, res) => {
        res.send('sending all projects');
    })

}