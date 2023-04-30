const mongoose = require('mongoose');

const data=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mobile:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})



const user=new mongoose.model('user',data);

module.exports=user;