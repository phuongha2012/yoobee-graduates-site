const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

const PORT = process.env.PORT || 3000;

// CONNECT TO DATABASE WITH MONGOOSE
const mongodbURI = `mongodb+srv://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@${keys.MONGO_CLUSTER_NAME}-qc9dp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Connected to DB'))
        .catch(err => {
              console.log(`DBConnectionError: ${err.message}`);
        }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// APP SET-UPS
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('client'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// IMPORT ROUTES
require('./routes/studentsRoutes')(app);
require('./routes/projectsRoutes')(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))