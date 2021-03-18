const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./api/userRoute');
const project = require('./api/project');
const transaction = require('./api/transactionRoute');

const app = express();
var port = 8080

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/api', user);
app.use('/api', project);
app.use('/api', transaction);

let uuid4 = require("uuid4");
// Generate a new UUID
var id = uuid4();

console.log(id)

app.get('', (req, res) => {
    res.send({ "as": "sasas" })



})

const uri = 'mongodb+srv://user:pass@cluster0-fcf8r.mongodb.net/geeksProject?retryWrites=true&w=majority';

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log(error);
    })

