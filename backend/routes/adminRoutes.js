const express = require("express");

const router = express.Router();

const verifyToken = require(
   "../middleware/authMiddleware"
);

const adminOnly = require(
   "../middleware/adminMiddleware"
);

const {
   getAllUsers,
   deleteUser,
   updateUserStatus,
   getAllTasks,
   deleteAnyTask,
   getActivityLogs,
   getAnalytics
} = require("../controllers/adminController");

router.get(
   "/users",
   verifyToken,
   adminOnly,
   getAllUsers
);

router.delete(
   "/users/:id",
   verifyToken,
   adminOnly,
   deleteUser
);

router.put(
   "/users/:id/status",
   verifyToken,
   adminOnly,
   updateUserStatus
);

router.get(
   "/tasks",
   verifyToken,
   adminOnly,
   getAllTasks
);

router.delete(
   "/tasks/:id",
   verifyToken,
   adminOnly,
   deleteAnyTask
);

router.get(
   "/logs",
   verifyToken,
   adminOnly,
   getActivityLogs
);

router.get(
   "/analytics",
   verifyToken,
   adminOnly,
   getAnalytics
);

module.exports = router;