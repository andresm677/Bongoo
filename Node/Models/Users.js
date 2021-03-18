const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    firstName : {type: Schema.Types.String},
    lastName : {type: Schema.Types.String},
    phoneNumber : {type: Schema.Types.String, unique: true},
    email : {type: Schema.Types.String, unique: true},
    password: {type: Schema.Types.String},
    type: {type: Schema.Types.String},
    categories: {type: Schema.Types.Array},
})
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            type: this.type,
            
            
        }, 'jwtPrivateKey'
    )
    return token;
}
exports.User = mongoose.model("User", userSchema);