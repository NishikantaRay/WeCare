import express from 'express';
const router = express.Router();
import TestRoutes from './testRoutes';


router.use('/getRoleRoutes', TestRoutes);


export default router;
