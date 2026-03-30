const mongoose= require("mongoose");
const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://lakshaytkm:a3mLtTh0DombPoKO@cluster0.fhkihji.mongodb.net/devTinder");
}
    module.exports=connectDB;
