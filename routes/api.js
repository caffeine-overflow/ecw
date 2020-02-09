const express = require('express');
const router = express.Router();
const orders = require('../models/orders')

/*-----------------------------------------------------------------------------------------------------*/
//Routes

router.post('/api/save', (req, res) => {
    console.log('Body', req.body)
    const data = req.body;
    const newOrder = new orders(data);

    newOrder.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Internal server error' })
        }
        else {
            res.status(200).json({
                msg: "Order has been saved"
            })
        }
    })

});

module.exports = router;  