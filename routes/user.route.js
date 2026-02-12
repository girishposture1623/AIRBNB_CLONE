const express = require('express');
const { getData, addData } = require('../controllers/user.controller');


const userRouter = express.Router();

userRouter.get('/', getData);

userRouter.post('/',addData)

module.exports = userRouter;

