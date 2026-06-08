import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        const {
            username,
            email,
            password
        } = req.body;

        const existingUser =
            await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user =
            new User({
                username,
                email,
                password: hashedPassword
            });

        await user.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const user =
            await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const validPassword =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token =
            jwt.sign(
                {
                    id: user._id
                },
                "secretkey",
                {
                    expiresIn: "1d"
                }
            );

        res.json({
            token
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

export default router;