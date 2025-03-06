const express = require("express");
const router = express.Router();
const questions = require("../data/questions.json");

router.get("/quiz", (req, res) => {
    res.json(questions);
});

module.exports = router;
