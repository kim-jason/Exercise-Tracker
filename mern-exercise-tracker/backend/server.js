const express = require('express'); //get express
const cors = require('cors'); //get cors
const mongoose = require('mongoose'); //get mongoose (use it to connect to the MongoDB database)

require('dotenv').config(); //get the dotenv file

const app = express(); //get our server
const port = process.env.PORT || 5000; //get our server

app.use(cors()); //cors middleware
app.use(express.json()); //allows us to parse JSON files

const uri = process.env.ATLAS_URI; //database URI (where our database is stored) that we get from the MongoDB ATLAS dashboard. Note that we created the .env file and put in our MongoDB connection string there
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } //connect to our MongoDB database. Just add in the two flags every time
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises'); //requires this file to exist
const usersRouter = require('./routes/users'); //requires this file to exist

app.use('/exercises', exercisesRouter); //Whenever anyone goes to a URL that ends with /exercises, then exercisesRouter will be loaded to be used
app.use('/users', usersRouter);

app.listen(port, () => { //starts the server by listening to the specified port
    console.log(`Server is running on port: ${port}`);
});