const express = require("express");
const app = express();

// GLOBAL VARIABLES
const PORT = 8000;
const DB = "jokes_db";


app.use(express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config')(DB)
require('./routes/jokes.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀`))