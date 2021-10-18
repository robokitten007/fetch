const express = require('express');

const router = express.Router();


var transactions = [];
router.post('/', (req, res)=>{

    const transaction = req.body
    transactions.push(transaction)
    res.send(transactions)
})
module.exports = router;
module.exports.transactions = transactions