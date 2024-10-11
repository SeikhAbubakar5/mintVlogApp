const express=require("express");


const router=express.Router();
const authToken=require("../Middleware/authToken")
const blogController=require("../controller/blogController")

//create blog
router.post("/",authToken,blogController.addBlog)

//get all blogs
router.get("/",authToken,blogController.getAllBlogs)

//get blog by id
router.get("/:id",authToken,blogController.getBlogById)



module.exports=router;