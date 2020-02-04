const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express();
const port = process.env.port || 8080;

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

/*-----------------------------------------------------------------------------------------------------*/

//Mongo schemas
const schema = mongoose.Schema;
const storeSchema = new schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const store = mongoose.model('store', storeSchema);

//Saving data to mongodb
// const data = {
//     title: 'Welcome',
//     body: 'Hello World',
// }
//const newstore = new store(data);  //instance of the modal
// newstore.save((error) => {
//     if (error)
//         console.log("Error saving")
//     else
//         console.log("Data has been saved")
// });

/*-----------------------------------------------------------------------------------------------------*/
//Routes
app.get('/api', (req, res) => {
    store.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("GET failed")
        })
});

/*-----------------------------------------------------------------------------------------------------*/
app.listen(port, console.log(`Server is starting at ${port}`))