import express from 'express';
const router = express.Router();

// import userRoute from './user.route';
import booking from './booking'
import userRoute from './user'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
router.use('/users', userRoute);
router.use('/book', booking);
return router;
};

export default routes;
