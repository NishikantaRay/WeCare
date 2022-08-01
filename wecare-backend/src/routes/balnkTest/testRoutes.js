import express from 'express';
import Role from '../../models/role.model'
import Endpoints from '../../models/endpoints.model'
import { ROLES } from '../../middlewares/role.middleware';
const router = express.Router();
const Mongoose = require('mongoose')

router.post('/test', async (req, res) => {
    try {

        let data={
            a:"12",
            b:"13",
        }

        res.json({
            status: "success",
            code: 200,
            data: data
        })
    } catch (error) {
        res.json({
            status: "failed",
            code: 401,
            data: {}
        })
    }
    
})


export default router
