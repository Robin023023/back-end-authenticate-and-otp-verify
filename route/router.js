const express=require("express");
const { allUser, registryPost ,loginPost} = require("../controller/controll");
const router=express.Router()

router.get("/allUser",allUser)
router.post("/register",registryPost)
router.post("/login",loginPost)

module.exports=router