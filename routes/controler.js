const database = require("../database/scheema");

const getallmessages = async (req, res) => {
  const reqdata = await database.find({});
  res.status(200).json({ success: true, data: reqdata });
};

const postmessages = async(req,res) =>{
    console.log(req.body)
    const reqdata = await database.create(req.body)
    res.status(200).json({ success: true, data: reqdata });
    
}

module.exports = { getallmessages , postmessages };
