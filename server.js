const express = require('express')
const path = require('path');
const api = require('./server/routes/api');
//const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(api);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

 /* MONGOOSE CONNECT */
 const db = "mongodb://localhost:27017/foreveryoungs";
 mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err){
        if(err){
        console.error("Error! " + err);
     }
}).then(result => {
  /* LISTEN TO SERVER ON MONGOOSE SUCCESS */
  app.listen(port, () => console.log(`app listening on port ${port}!`));
})
.catch(err => console.log(err));