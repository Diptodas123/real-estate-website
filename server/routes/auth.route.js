import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUser } from "../controller/user.controller.js";
import User from "../schema/userSchema.js";
import fetchUser from "../middleware/fetchUser.js";
import { getAllUsers } from "../controller/auth.controller.js";

const router = express.Router();

//Route 1: POST request to create an account. Login not required
router.post("/createuser", [
    body('username', "Enter a valid username").exists(),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 8 characters").isLength({ min: 8 }),
    body('phone', "Enter a valid phone number").isLength({ min: 10 }),
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        let success = false;

        //check whether the user with this email exists already 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: success, error: "A user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: securedPassword,
            phone: req.body.phone
        })

        const data = {
            id: user.id
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.status(201).json({ success, authToken, message: "User Created Successfully" });

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

//Route 2: POST request to login. Login not required
router.post("/login", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let success = false;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: success, error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);     //returns boolean
        if (!passwordCompare) {
            return res.status(400).json({ success: success, error: "Please try to login with correct credentials" });
        }

        const payload = {
            id: user.id
        }

        const authToken = jwt.sign(payload, process.env.JWT_SECRET);
        success = true;
        res.status(200).send({ success, authToken });

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

//Route 3:get request to get the details of a user
router.get("/getuser", fetchUser, getUser);

//Route 4: get request to get all users for admin
router.get("/getallusers", getAllUsers);

export default router;