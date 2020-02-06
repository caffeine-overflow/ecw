const mongoose = require('mongoose')

//Mongo schemas
const schema = mongoose.Schema;

const storeSchema = new schema();

module.exports = mongoose.model('store', storeSchema);