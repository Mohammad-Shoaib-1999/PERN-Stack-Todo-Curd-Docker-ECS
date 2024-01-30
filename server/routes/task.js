const express = require("express");
const router = express.Router();
const passport = require("passport");
const task = require("./../controllers/task");

require("dotenv").config();

router.get("/", task.getAll);
router.get("/:id", task.get);
router.post("/", task.createTask);
router.put("/:id", task.updateTask);
router.delete("/:id", task.delete);
router.delete("/", task.deleteAll);

module.exports = router;
