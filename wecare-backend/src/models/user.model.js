import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const userSchema = new Schema(
  {
    userid: {
        type: String,
    },
    name: {
      type: String
    },
    password: {
      type: String
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true
    },
    email: {
      type: String
    },
    dateofbirth: {
      type: String
    },
    gender: {
      type:String
    },
    pincode:{
      type:String
    },
    city:{
      type:String
    },
    state:{
      type:String
    },
    country:{
      type:String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
