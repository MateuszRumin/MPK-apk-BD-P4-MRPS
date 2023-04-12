const express = require('express')


const router = express.Router();

router.get("/",(req,res)=> {
    res.render("index")
});

router.get("/register",(get,res) => {
    res.render("register")
});

router.get("/profile",(get,res) => {
    res.render("profile")
});


module.exports = router;

