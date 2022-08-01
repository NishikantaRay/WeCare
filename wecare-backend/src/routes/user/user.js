import express from 'express';
import User from '../../models/user.model';
import Coach from '../../models/coach.model';
import { handleCounter } from '../../counters/counters';
import { userRegValidator,coachRegValidator,userloginValidator,coachloginValidator} from '../../validators/joi.validator';
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/userRegister', userRegValidator, async (req, res) => {
    try{
        if (req.validatedBody.api_key === process.env.API_SECRET_KEY) {
            let userData = await User.find({ phoneNumber: req.validatedBody.phoneNumber })
            let userDataEmail = await User.find({ email: req.validatedBody.email })
            if (!userData.length && !userDataEmail.length) {
        
              const passwordHash = await bcrypt.hash(req.validatedBody.password, 10)
              req.validatedBody.password = passwordHash
              let newUser = new User({
                ...req.validatedBody
              })
              newUser.userid = await handleCounter('userId')
              const userDetails = await newUser.save()
              res.json({
                status: "success",
                message: "user added successfully",
                code: 200,
                data: { userDetails,userid:newUser.userid }
              })
            } else{
                res.json({
                    message: "user already registered",
                    code: 400,
                    data: {}
                  })
            }
          } else {
            res.json({
                message: "unauthorised",
                code: 400,
                data: {}
              })
          }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

    
})
router.post('/coachRegister', coachRegValidator, async (req, res) => {
    try{
        if (req.validatedBody.api_key === process.env.API_SECRET_KEY) {
            let userData = await Coach.find({ phoneNumber: req.validatedBody.phoneNumber })
            if (!userData.length) {
        
              const passwordHash = await bcrypt.hash(req.validatedBody.password, 10)
              req.validatedBody.password = passwordHash
              let newUser = new Coach({
                ...req.validatedBody
              })
              newUser.coachid = await handleCounter('coachId')
              const userDetails = await newUser.save()
              res.json({
                status: "success",
                message: "coach added successfully",
                code: 200,
                data: { userDetails,coachid:newUser.coachid }
              })
            } else {
                res.json({
                    message: "coach already registered",
                    code: 400,
                    data: {}
                  })
            }
          } else {
            res.json({
                message: "unauthorised",
                code: 400,
                data: {}
              })
          }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }

    
})

router.post('/userLogin',userloginValidator, async (req, res) => {
    try{
        let userData = await User.findOne({ userid: req.validatedBody.userid })
        if (userData) {
          let passwordVerify = await bcrypt.compare(req.body.password, userData.password)
          if (passwordVerify) {
            const payload = { userData }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "2d" })
            res.json({
              status: "success",
              message: "Login sucess",
              code: 200,
              data: { token, userData ,_id:userData._id} 
            })
          }
          else{
              res.json({
                  message: "Wrong Password",
                  code: 403,
                  data: {},
                })
          }
        } else{
          res.json({
              message: "No such user found",
              code: 403,
              data: {},
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})

router.post('/coachLogin',coachloginValidator, async (req, res) => {
    try{
        let userData = await Coach.findOne({ coachid: req.validatedBody.coachid })
        if (userData) {
          let passwordVerify = await bcrypt.compare(req.body.password, userData.password)
          if (passwordVerify) {
            const payload = { userData }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "2d" })
            res.json({
              status: "success",
              message: "Login sucess",
              code: 200,
              data: { token, userData ,_id:userData._id} 
            })
          }
          else {
              res.json({
                  message: "Wrong Password",
                  code: 403,
                  data: {},
                })
          }
        } else {
          res.json({
              message: "No such coach found",
              code: 403,
              data: {},
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})

router.post('/userDetailsbyuserid', async (req, res) => {
    try{
        let userData = await User.find({ userid: req.body.userid })
        if (userData) {
            res.json({
                status: "success",
                message: "user details",
                code: 200,
                data: { userData }
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})
router.post('/userDetails', async (req, res) => {
    try{
        let userData = await User.find()
        if (userData) {
            res.json({
                message: "user details",
                code: 200,
                data: userData,
              })
        } else{
            res.json({
                message: "no user found",
                code: 400,
                data: {},
              })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})
router.post('/coachDetailsbycoachid', async (req, res) => {
    try{
        let userData = await Coach.find({ coachid: req.body.coachid })
        if (userData) {
            res.json({
                message: "coach details",
                code: 200,
                data: userData,
              })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})
router.post('/coachDetails', async (req, res) => {
    try{
        let userData = await Coach.find()
        if (userData) {
            res.json({
                message: "coach details",
                code: 200,
                data: userData,
              })
        } else {
            res.json({
                message: "no coach found",
                code: 400,
                data: {},
              })
        }
    }catch(err){
        console.log(err)
        res.json({
            status: "fail",
            code: 500,
            error: err
        })
    }
})
export default router