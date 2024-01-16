require("dotenv").config({ path: "./.env" });
const express = require("express");
const pool = require("./db.config");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 9000;

// Routes //

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});
// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id= $1", [
      id,
    ]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateoTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.status(200).json("Todo was updated");
  } catch (error) {
    console.error(error.message);
  }
});
// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todos WHERE todo_id = $1",
      [id]
    );
    res.status(200).json("deleted successfully");
  } catch (error) {
    console.error(error.message);
  }
});
// test
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});
