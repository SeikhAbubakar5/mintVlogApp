const express =require("express");

const router=express.Router();
const userController=require("../controller/userController")

//register a user
router.post("/register" ,userController.registerUser)
//login user
router.post("/login" ,userController.loginUser)

module.exports=router;