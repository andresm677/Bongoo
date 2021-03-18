const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const {Service} = require("../Models/Service");
const {Offer} = require("../Models/Offers");
const {User} = require("../Models/Users");
const {Category} = require("../Models/Categories");
router.post("/", async (req, res) => {
    const {title, description, author,category, images, location} = req.body;
    const cate = await Category.findOne({name: category });
    
    let service = new Service({
        title,
        description,
        author,
        category: cate._id,
        isPending: true,
        images,
        location,
    });
    service = await service.save();
    res.status(200).send(service);
})
router.get("/", async (req, res) => {
    const {userId} = req.query;
    const {categories} = await User.findById(userId);
    let services = await Service.find({$and: [{category: {$in: [...categories]}},{isPending: true}]});
    services = await Promise.all(
        services.map(async (s) => {
            const {firstName, lastName} = await User.findById(s.author);
            const {name: category} = await Category.findById(s.category);
            const totalOffers = await Offer.find({service: s._id});
            const author = firstName + " " +lastName;
            return {_id: s._id, category, author, totalOffers: totalOffers.length, images: s.images, title: s.title}
        })
    );
    res.send(services);
})
router.get("/:id", async(req, res) => {    
    const {id} = req.params;
    const service = await Service.findById(id);
    const {name: category} = await Category.findById(service.category);
    const {firstName, lastName} = await User.findById(service.author);
    const totalOffers = await Offer.find({service: id});
    res.send({...service._doc, category,author: firstName + " " +lastName, totalOffers: totalOffers.length})
})
router.get("/:id/offers", async(req, res)=>{
    const {id} = req.params;
    let offers = await Offer.find({service: id});
    offers = await Promise.all(
        offers.map(async(o) => {
            const {firstName, lastName, phoneNumber} = await User.findById(o.worker);
            return {name: firstName + " " + lastName, phoneNumber, price: o.price};
        })
    )
    res.send(offers);
})

module.exports = router;