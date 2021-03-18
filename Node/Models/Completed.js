const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedServiceSchema = new Schema({
    service = {type: Schema.Types.ObjectId},
    offer = {type: Schema.Types.ObjectId},
})

module.exports = mongoose.model("Completed", CompletedServiceSchema);