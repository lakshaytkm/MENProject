const mongoose=require("mongoose");
const validator= require("validator");

const userSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    gender:{
        type: String
    },
    age:{
        type: Number
    }
});


module.exports=mongoose.model("User", userSchema);