const mongoose = require('mongoose')

//Mongo schemas
const schema = mongoose.Schema;

const storeSchema = new schema({
    name: String
});

module.exports = mongoose.model('store', storeSchema);