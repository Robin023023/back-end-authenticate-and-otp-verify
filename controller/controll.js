const User = require("../modal/passportSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const allUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const registryPost = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            if (err) {
                return res.status(500).json({ message: "Error hashing password" });
            }
            const user = new User({
                email: req.body.email,
                password: hash
            });
            await user.save();
            res.status(200).json(user);
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.status(200).json({ status: "valid user" });
            } else {
                res.status(401).json({ status: "invalid credentials" });
            }
        } else {
            res.status(401).json({ status: "invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { allUser, registryPost, loginPost };
