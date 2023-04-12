const express = require('express')
const panelControler = require('../controllers/panel')

const router = express.Router();

router.get("/", panelControler.isLoggedIn, (req,res)=> {
    
    if (req.user){
        if (req.user.typ_id===1) res.render("admin")
        else if (req.user.typ_id===2) res.render("menagement")
        else res.render("driver")

    }else res.render("index")
});

router.get("/accounts", panelControler.isLoggedIn, (req,res) => {
    if (req.user)
        if (req.user.typ_id===1)res.render("accounts");  
        else res.redirect('/');
    else res.redirect('/');
});

router.get("/profile", panelControler.isLoggedIn, (req,res) => {
    if ( req.user)res.render("profile")
    else res.redirect('/')
});


module.exports = router;

