const mongoose  = require('mongoose')

const JokeSchema  = new mongoose.Schema({
    setup:{
        type:String,
        required: [true, "setup is required"],
        minlength: [10, "setup must be greater than 10 characters"]
    },
    punchine:{
        type:String,
        required: [true, "punchine is required"],
        minlength: [3, "punchine must be greater than 3 characters"]       
    },

}, {timestamps:true});

module.exports = mongoose.model('Joke', JokeSchema);