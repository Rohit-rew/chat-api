const mongoose = require("mongoose");

async function connectdb(uri) {
 await mongoose.connect(uri);
}

module.exports = connectdb