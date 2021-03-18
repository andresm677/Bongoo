const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const {Service} = require("../Models/Service");
const {Offer} = require("../Models/Offers");
const {User} = require("../Models/Users");
const {Category} = require("../Models/Categories");

router.post("/", async(req,res) => {
    console.log(req.body);
    const {service, worker, price} = req.body;
    const offer = new Offer({
        worker,
        service,
        price
    })
    await offer.save();
    res.status(200);
})
module.exports = router;