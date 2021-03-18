const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const {User} = require("../Models/Users");
const { Category } = require('../Models/Categories');
router.post("/",  async (req, res) => {
    const {firstName, lastName, phoneNumber, email, password} = req.body;
    
    let user = new User({
        firstName,
        lastName,
        type: "client",
        phoneNumber,
        email,
        password,
    })
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();
    const token = user.generateAuthToken();
    res.send(token);
})
router.get("/categories/:id", async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    const categories = await Promise.all(
        user.categories.map(async (c) => {
            const category = await Category.findById(c)
            return category.name;
        })
    )
    res.send(categories);
})
module.exports = router;