const { task } = require("../models");

let self = {};

self.createTask = async (req, res, next) => {
  try {
    const { discreption } = req.body;
    const newTodo = await task.create({ discreption });
    res.status(200).json(newTodo);
  } catch (err) {
    next(err);
  }
};

// get all todos
self.getAll = async (req, res, next) => {
  try {
    const allTodos = await task.findAll();
    res.status(200).json(allTodos);
  } catch (err) {
    next(err);
  }
};

// get a todo
self.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await task.findByPk(id);
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// update a todo
self.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { discreption } = req.body;
    const updatedTodo = await task.update({ discreption }, { where: { id } });
    res
      .status(200)
      .json({ message: "Todo was updated", updatedRows: updatedTodo[0] });
  } catch (err) {
    next(err);
  }
};

// delete a todo
self.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await task.destroy({ where: { id } });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};

self.deleteAll = async (req, res, next) => {
  try {
    await task.destroy({ where: {} });
    res.status(200).json({ message: "All todos deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = self;
