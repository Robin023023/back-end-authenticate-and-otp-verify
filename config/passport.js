const User=require("../modal/passportSchema")

require("dotenv").config()
const passport=require("passport")

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        console.log(jwt_payload); // ডিবাগ করার জন্য পেলোড লগ করুন
        const user = await User.findOne({ _id: jwt_payload.id });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false); // ইউজার পাওয়া যায়নি
        }
    } catch (err) {
        return done(err, false); // ত্রুটি ঘটলে
    }
}));