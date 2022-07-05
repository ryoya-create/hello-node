const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.render('attendance.ejs');
})

router.get("/info", (req,res) =>{
    res.render('password.ejs');
})


module.exports = router;