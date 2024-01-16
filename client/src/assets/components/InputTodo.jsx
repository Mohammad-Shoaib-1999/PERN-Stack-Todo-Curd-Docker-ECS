import { useState } from "react";
import axios from "axios";
const InputTodo = () => {
  const [description, setDescription] = useState("Hello");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description };

      axios
        .post("http://localhost:9000/todos", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // Handle the response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
        window.location.reload()
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5 text-2xl">PERN Todo List</h1>
      <form
        className="flex justify-center items-center mt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-300 items-center w-3/5 h-10"
        />
        <input
          type="submit"
          value="Add"
          className="text-white bg-black w-16 h-10"
        />
      </form>
    </>
  );
};

export default InputTodo;
