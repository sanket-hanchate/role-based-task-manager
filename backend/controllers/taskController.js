const Task = require("../models/Task");
const logActivity = require(
   "../utils/logActivity"
);

const createTask = async (req, res) => {

    try {

        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description,
            createdBy: req.user.id
        });

        await logActivity(
            req.user.id,
            "TASK_CREATED",
            `Created task: ${task.title}`
        );

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find({
            createdBy: req.user.id
        });

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const updateTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if (task.createdBy.toString() !== req.user.id) {

            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        task.title =
            req.body.title || task.title;

        task.description =
            req.body.description || task.description;

        task.status =
            req.body.status || task.status;

        await task.save();

        await logActivity(
            req.user.id,
            "TASK_UPDATED",
            `Updated task: ${task.title}`
        );

        res.status(200).json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if (task.createdBy.toString() !== req.user.id) {

            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        await task.deleteOne();

        await logActivity(
            req.user.id,
            "TASK_DELETED",
            `Deleted task: ${task.title}`
        );

        res.status(200).json({
            message: "Task deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};

