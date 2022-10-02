const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/routes");
const { urlencoded } = require("express");
app.use(urlencoded({extended:false}))
app.use(express.json())

app.use("/api", router);







//database and server

const connectdb = require("./database/connect");
let port = process.env.PORT;
let uri = process.env.URI;
async function startserver() {
  try {
    await connectdb(uri);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

startserver();
