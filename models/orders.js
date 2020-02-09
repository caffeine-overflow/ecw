const mongoose = require('mongoose')

//Mongo schemas
const schema = mongoose.Schema;

const ordersSchema = new schema({
    email: String,
    "address_city": String,
    "address_country": String,
    "address_line1": String,
    "address_line1_check": String,
    "address_line2": String,
    "address_state": String,
    "address_zip": String,
    "address_zip_check": String,
    "brand": String,
    "country": String,
    "cvc_check": String,
    "exp_month": String,
    "exp_year": String,
    "funding": String,
    "last4": String,
    "order": [],
    "date": Date
});

module.exports = mongoose.model('orders', ordersSchema);