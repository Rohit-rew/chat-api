const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./database/scheema");

app.get("/", async (req, res) => {
  const reqdata = await database.find({ username: "pinakin" });
  res.status(200).json({ success: true, data: reqdata });
});

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
