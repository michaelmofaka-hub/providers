import mongoose from "mongoose";

const user = new mongoose.Schema({
  firstName:{
    type : String,
    required : true
  },
  lastName:{
    type : String,
    required : true
  },
  Username:{
    type:String,
    required:true
  },
  email:{
    type : String,
    required : true
  },
  password:{
    type : String,
    required : true,
  }
},{timestamp : true});

const User = mongoose.model("User", user);

export default User;