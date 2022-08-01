import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const coachSchema = new Schema(
  {
    coachid: {
        type: String,
    },
    name: {
      type: String
    },
    password: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    gender: {
        type:String
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true
    },
    speciality:{
        type:String
    }
  },
  {
    timestamps: true
  }
);

export default model('Coach', coachSchema);
