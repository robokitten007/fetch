const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const addPoints = require('./routes/api/add')
const balance = require('./routes/api/balance')
const spendPoints = require('./routes/api/spend')

app.get('/', (req, res)=>{
    res.send('hello world!')
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/api/addpoints', addPoints)
app.use('/api/balance', balance)
app.use('/api/spendpoints', spendPoints)

//run on heroku or local host port 5000
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`server is running on port ${port}`)) 