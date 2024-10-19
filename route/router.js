const express=require("express");
const { allUser, registryPost ,loginPost, sendOTP, verifyOTP, resetPassword,} = require("../controller/controll");
const router=express.Router()
const passport = require("passport");

router.get("/allUser",allUser)
router.post("/register",registryPost)
router.post("/login",loginPost);

router.post("/send-otp", sendOTP); // Send OTP to user's email
router.post("/verify-otp", verifyOTP); // Verify the OTP
router.post("/reset-password", resetPassword); // Reset password

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    {
        res.status(200).send({
          success:true,
          user:{
            id:req.user._id,
            email:req.user.email
          }
        })
    }
});


module.exports=router