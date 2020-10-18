
const express = require('express');
const bodyParser = require('body-parser');
require("./config/mysql");
const app = express();

app.use(express.json());
const userRoute = require('./controller/user.controller')
app.use('/user',userRoute);
app.listen(8080,()=>{
    console.log("SERVER IS LISTENING ON PORT 8080");
});
