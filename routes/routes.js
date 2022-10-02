const router = require("express").Router();

const { getallmessages , postmessages } = require("./controler");

router.get("/messages", getallmessages);
router.post("/messages", postmessages);

module.exports = router;
