import { Schema, model, Mongoose } from 'mongoose';
const mongoose = require('mongoose')

const bookingSchema = new Schema(
  {
    userid: {
        type: String,
    },
    coachid:{
        type:String
    },
    bookingid:{
        type:String
    },
    date:{
        type:String

    },
    slot:{
        type:String
    },
    coach:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Coach'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
  },
  {
    timestamps: true
  }
);

export default model('Booking', bookingSchema);
