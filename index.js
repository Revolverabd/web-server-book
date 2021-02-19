require('dotenv').config();
const { dbConnection } = require('./config/configDb.js');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const bookRouter = require('./router/bookRouter');


app.use(bodyParser.json());
app.use('/api', bookRouter);

dbConnection();

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});





