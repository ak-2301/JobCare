import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {getUserController, updateUserController}  from "../controllers/userController.js";


//router object
const router = express.Router();

// get user data
router.post('/getUser', userAuth,getUserController)

//update user
router.put('/update-user',userAuth,updateUserController)


export default router;