const express = require('express')
const bodyParser = require('body-parser')
let controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

//houser

var test = [1,2,3];

let app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})


app.get('/api/get', controller.get);
app.post('/api/post', controller.post);
app.delete('/api/delete/:id', controller.delete);

app.listen(3005, () => console.log("working on port 3005"))



//alter table houser
//add rent integer;