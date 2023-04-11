const express = require('express')


const router = express.Router();

router.get("/",(req,res)=> {
    res.render("index")
});

router.get("/register",(get,res) => {
    res.render("register")
});


module.exports = router;

