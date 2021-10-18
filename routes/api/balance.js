const express = require('express');

const router = express.Router();


var transactions = require('./add').transactions
router.get('/', (req, res)=>{
    let data ={}
    for(let transaction of transactions){
            
            if(!data[transaction['\"payer\"']]){
                data[transaction['\"payer\"']] = transaction['\"points\"']
            }else {
                data[transaction['\"payer\"']] += transaction['\"points\"']
            }
            
        }
        res.send(data)
    })
module.exports = router;
