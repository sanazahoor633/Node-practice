const mongoose = require("mongoose");
require('dotenv').config();
const conn = mongoose.connect(process.env.MONGO_URL);


module.exports = conn;




