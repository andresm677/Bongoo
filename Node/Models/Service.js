const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = mongoose.model("Service", new Schema({
    title : {type: Schema.Types.String},
    description : {type: Schema.Types.String},
    category : {type: Schema.Types.ObjectId},
    author : {type: Schema.Types.ObjectId},
    isPending : {type: Schema.Types.Boolean},
    location: {type: Schema.Types.Array},
    images : {type: Schema.Types.Array},
    publishedAt: {type: Date, default: new Date()}
}))

exports.Service = Service;
