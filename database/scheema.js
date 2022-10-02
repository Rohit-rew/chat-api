const mongoose = require("mongoose");

const scheema = new mongoose.Schema({
    username : String,
    password : String
});

const database = mongoose.model("usercreds", scheema);

module.exports = database
