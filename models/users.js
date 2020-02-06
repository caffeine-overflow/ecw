const mongoose = require('mongoose')

//Mongo schemas
const schema = mongoose.Schema;

const usersSchema = new schema();

module.exports = mongoose.model('users', usersSchema);
