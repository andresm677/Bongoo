const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = mongoose.model("Offer", new Schema({
  worker : {type: Schema.Types.ObjectId},
  service : {type: Schema.Types.ObjectId},
  price : {type: Schema.Types.Number},  
}))

exports.Offer = offerSchema;