import express from 'express';
const router = express.Router();
import Booking from './booking';


router.use('/bookings', Booking);


export default router;
