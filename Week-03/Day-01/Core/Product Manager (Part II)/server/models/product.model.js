const mongoose  = require('mongoose')

const ProductSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Product Title is required"],
        minlength:[5, "Title must be at least 5 characters"]
    },
    price:{
        type:Number,
        required:[true, "Content must be present"],
    },
    description : {
        type:String,
        required:[true, "Content must be present"],
        minlength:[10, "Content is Too short"]
    }
}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);