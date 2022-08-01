import express from 'express';
import Booking from '../../models/booking.model';
import User from '../../models/user.model';
import Coach from '../../models/coach.model';
import { handleCounter } from '../../counters/counters';
import { addBookingValidator,updateBookingValidator } from '../../validators/joi.validator';
const router = express.Router();


router.post('/addBooking', addBookingValidator, async (req, res) => {
    try {
        const user = await User.find({userid:req.validatedBody.userid});
       
        const coach = await Coach.find({coachid:req.validatedBody.coachid});
        if (user && coach) {
            let bookingId = await handleCounter("bookingId")
           
            const booking = new Booking({ ...req.validatedBody, bookingid: bookingId,
            userid :req.validatedBody.userid,
            coachid :req.validatedBody.coachid,
            })
            
            
            let book = await booking.save()

            res.json({
                status: "success",
                code: 200,
                data: { BookingData: book,user:user,coach:coach }
            })

        }else{
            res.json({
                status: "fail",
                code: 400,
                data: { message: "User or Coach not found" }
            })
        }

    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})

router.post('/updateBooking',updateBookingValidator, async (req, res) => {
    try {
        const booking = await Booking.find({bookingid:req.validatedBody.bookingid});
        if (booking) {
            const data = await Booking.findOneAndUpdate(req.validatedBody.bookingid,{$set:req.validatedBody})
            res.json({
                status: "success",
                code: 200,
                data: { BookingData: data }
            })
        } else {
            res.json({
                status: "fail",
                code: 400,
                data: { message: "Booking not found" }
            })
        }

    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})

router.post('/getBooking', async (req, res) => {
    try {
        const booking = await Booking.find();
        res.json({
            status: "success",
            code: 200,
            data: { BookingData: booking }
        })
    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})

router.post('/getBookingByUserId', async (req, res) => {
    try {
        const booking = await Booking.find({ userid: req.body.userid });
        res.json({
            status: "success",
            code: 200,
            data: { BookingData: booking }
        })
    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})

router.post('/getBookingByCoachId', async (req, res) => {
    try {
        const booking = await Booking.find({ coachid: req.body.coachid });
        res.json({
            status: "success",
            code: 200,
            data: { BookingData: booking }
        })
    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})

router.post('/deleteBooking', async (req, res) => {
    try {
        const booking = await Booking.find({bookingid:req.body.bookingid});
        if (booking) {
            const data = await Booking.findOneAndDelete(req.body.bookingid)
            res.json({
                status: "success",
                code: 200,
                data: { BookingData: data }
            })
        } else {
            res.json({
                status: "fail",
                code: 400,
                data: { message: "Booking not found" }
            })
        }

    }
    catch (err) {
        console.log(err);
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

})
export default router
