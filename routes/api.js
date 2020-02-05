const express = require('express');
const router = express.Router();
const store = require('../models/store')
const users = require('../models/users')

/*-----------------------------------------------------------------------------------------------------*/
//Routes
router.get('/api', (req, res) => {
    users.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("GET failed")
        })
});

router.get('/api/stores', (req, res) => {
    store.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("GET failed")
        })
});

module.exports = router;  