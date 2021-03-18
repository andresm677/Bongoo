const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pendingServiceSchema = mongoose.model("Pending", new Schema({
    service : {type: Schema.Types.ObjectId},
}))
exports.Pending = pendingServiceSchema;