import mongoose from "mongoose";
import { User } from "./User.js";

export const Jobs = new mongoose.Schema({
  title:{
    type: String,
    required: true;
  },
  description:{
    type: String,
    required: true
  },
  userId:{
    type: mongoose.Schema.Type.Objectid,
    ref: "User"
  }
  
},{timestamps: true});
