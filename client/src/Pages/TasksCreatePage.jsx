import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TasksCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    console.log("Form submitted with title:", title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Add new card</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksCreatePage;
