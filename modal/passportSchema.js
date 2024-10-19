const mongoose = require("mongoose");

const modal = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        require:true // Store the OTP
    },
    otpExpires: {
        type: Date, // Store OTP expiration time
    },
    createOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("password", modal);
