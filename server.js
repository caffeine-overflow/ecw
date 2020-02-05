const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express();
const port = process.env.port || 8080;
const routes = require('./routes/api')

//HTTP request logger
app.use(morgan('tiny'));

/*---------------------------------------------------------------------------------------------------*/
//Connect mongoos

const MONDO_DB_URI = 'mongodb+srv://danish:danish1995@store-gtfrg.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONDO_DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})

//checking connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Take care of  http8080 request on 3000 port for the react
app.use(cors());
/*-----------------------------------------------------------------------------------------------------*/
app.use('/', routes);
app.listen(port, console.log(`Server is starting at ${port}`))