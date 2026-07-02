import {mongoose} from "mongoose";

const userSchema = mongoose.Schema({
  usermame:{
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  },
  phonenumber:{
    type: number,
    required: true,
  }
},{timestamps: true});

export const user = mongoose.create('user', userSchema);

