import express from "express";

import Task from "../models/Task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {

    try {

        const tasks =
            await Task.find({
                userId: req.user.id
            });

        res.json(tasks);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

router.post("/", auth, async (req, res) => {

    try {

        const {
            title,
            description,
            status
        } = req.body;

        const task =
            new Task({
                title,
                description,
                status,
                userId: req.user.id
            });

        await task.save();

        res.status(201).json(task);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

router.put("/:id", auth, async (req, res) => {

    try {

        const task =
            await Task.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(task);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

router.delete("/:id", auth, async (req, res) => {

    try {

        await Task.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Task deleted"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

export default router;