const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        unique : true,
        trim : true,
        required :true,
        minlength : 3
    },
    password : {
        type : String,
        trim : true,
        required :true,
        minlength : 3
    },
    email : {
        type :String,
        required :true,
    }
},{
    timestamps : true,
    required : true,
})

const User = mongoose.model('User' , userSchema) 

module.exports = User