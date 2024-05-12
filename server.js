//Requiring express and middleware
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const apartmentsRouter = require('./routes/apartments');
const houseRouter = require('./routes/houses');

const  PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE PIPELINE
//Use middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//Routes
app.get('/', function(req, res) {
    res.send('welcome!');
})

app.use('/apartments', apartmentsRouter);

app.use('/houses', houseRouter);

app.listen(PORT, function() {
    console.log(`Server is running in ${PORT}`);
})