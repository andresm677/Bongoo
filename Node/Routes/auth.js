const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require("../Models/Users")

router.post("/", async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).send("Correo o contraseña incorrecta");
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send("Correo o contraseña incorrecta")
    const token = user.generateAuthToken();
    res.send(token);
})
module.exports = router;