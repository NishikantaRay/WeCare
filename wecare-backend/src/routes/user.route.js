import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, newUserValidator, otpGenerateValidator, otpValidateValidator } from '../validators/joi.validator';
import { userAuth } from '../middlewares/auth.middleware';

import bcrypt from 'bcrypt';

import User from '../models/user.model';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';


const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
// router.post('/userRegister', newUserValidator, userController.newUser);
router.post('/userRegister', newUserValidator, userController.userRegister)
router.post('/userLogin', loginValidator, userController.userLogin)


//route to get a single user by their user id
router.get('/:_id', userAuth, userController.getUser);

//route to update a single user by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
