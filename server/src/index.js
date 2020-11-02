const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const events = require("./router/events");


app.use(bodyParser.json())
app.use("/events", events);


app.get('/', (req, res) => {
    res.status(200).send('Home Page');
})

app.listen(3000, () => {
    console.log('Server runnning http://localhost:3000')
})