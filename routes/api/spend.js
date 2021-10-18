const express = require('express');
const router = express.Router();


var transactions = require('./add').transactions
router.post('/', (req,res)=>{
   
    let points = parseInt(req.body['\"points\"'])
    let array = [];

//sort in asc order
    transactions.sort((a,b)=>new Date(a['\"timestamp\"']).getTime() - new Date(b['\"timestamp\"']).getTime())
    let i = 0;
    let counter = {}
    while(points >0 && i< transactions.length){
    
        if(parseInt(transactions[i]['\"points\"']) < 0){
            points = points + Math.abs(parseInt(transactions[i]['\"points\"']))
            
            if(!counter[transactions[i]['\"payer\"']]) {
                counter[transactions[i]['\"payer\"']] = - parseInt(transactions[i]['\"points\"'])
            }else {
                counter[transactions[i]['\"payer\"']] += - parseInt(transactions[i]['\"points\"'])
            }
            transactions[i]['\"points\"'] = 0
            i++;
        } else if (points > parseInt(transactions[i]['\"points\"'])){
      
            points = points - parseInt(transactions[i]['\"points\"'])
           
           if(!counter[transactions[i]['\"payer\"']]) {
                counter[transactions[i]['\"payer\"']] = -parseInt(transactions[i]['\"points\"'])
            }else {
                counter[transactions[i]['\"payer\"']] += -parseInt(transactions[i]['\"points\"'])
            }
            transactions[i]['\"points\"'] = 0
            i++
        }else {
            transactions[i]['\"points\"'] = parseInt(transactions[i]['\"points\"']) - points
           
             if(!counter[transactions[i]['\"payer\"']]) {
                counter[transactions[i]['\"payer\"']] = - points
            }else {
                counter[transactions[i]['\"payer\"']] += - points
            }
            points = 0;
            i++;
        }
    }
         res.send(counter)
})

module.exports = router;
