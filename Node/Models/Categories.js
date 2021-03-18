const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = 
mongoose.model("Category", new Schema ({
    name : {type: Schema.Types.String},
}))

exports.Category = Category;

