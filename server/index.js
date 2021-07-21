const express       =  require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');

const flightRouter     = require('./routes/flightRoute.js');

//initliaze the server instance
const app = express();

//server port
const port = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/flight', flightRouter);

app.listen(port, () =>{
    console.log("Server is running")
});