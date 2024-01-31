import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";


// import { MdOutlineFlag } from "react-icons/md";
// import { MdDashboardCustomize } from "react-icons/md";
// import { LuTimerReset } from "react-icons/lu";
// import { FaUsers } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import { CiEdit } from "react-icons/ci";

const selectOptions = [
  { label: "TODO", value: "TODO" },
  { label: "IN PROGRESS", value: "IN PROGRESS" },
  { label: "IN REVIEW", value: "IN REVIEW" },
  { label: "DONE", value: "DONE" },
  { label: "Unassigned", value: null },
];

const userOptions = [
  {
    id: 1,
    img: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
    name: "jses leos",
  },
  {
    id: 2,
    img: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
    name: "john doe",
  },
  {
    id: 3,
    img: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
    name: "bella",
  },
  {
    id: 4,
    img: "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
    name: "jses edwatd",
  },
];

const TasksEditPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  // const [activeKey, setActiveKey] = useState();
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [stage, setStage] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const [users, setUsers] = useState([]);

  const handleCancel = () => {
    navigate("/");
  };

  const handleDelete = () => {
    console.log("Delete card logic");
  };

  const handleSave = (e) => {
    e.preventDefault()
    // Implement your save logic here
    console.log("Form data saved:", title,description,dueDate,stage,isComplete,users);
  };

  const handleUserSelect = (e) => {
    const selectedUser = e.target.value;
    setUsers((prevUsers) => {
      if (prevUsers.includes(selectedUser)) {
        // Remove user if already selected
        return prevUsers.filter((user) => user !== selectedUser);
      } else {
        // Add user if not selected
        return [...prevUsers, selectedUser];
      }
    });
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-4 bg-white border border-black rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-white">
            <div className="flex justify-start items-center">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <button type="submit">
                <CiEdit color="blue" />
              </button>
            </div>
          </h2>
          <div className="flex justify-start items-center flex-col w-full">
            {/* Stage Form */}
            <div className="flex justify-between items-center relative z-0 w-full mb-5 group ">
              <select
                className=" w-1/2 mt-2 border h-[35px] "
                value={stage}
                onChange={(e) => setStage(e.target.value)}
              >
                <option value="Choose a category">Select a Stage</option>
                {selectOptions &&
                  selectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <div className="flex justify-center items-center">
                <input
        type="checkbox"
        checked={isComplete}
        onChange={()=>setIsComplete(!isComplete)}
        className="mr-2"
      />
                <label htmlFor="completed">Mark as complete</label>
              </div>
            </div>
            {/* Description Form */}
            {/* <MdDashboardCustomize /> */}
            <div className="flex justify-center items-center relative z-0 w-full mb-5 group">
              <MDEditor
                value={description}
                onChange={(value) => setDescription(value)}
                width={450}
                preview="edit"
                style={{ border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            {/* Due Date Form */}
            <div className="flex justify-center items-center relative z-0 w-full mb-5 group">
              {/* <LuTimerReset /> */}
              <input
                type="datetime-local"
                className="w-full border p-2"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            {/* Users Form */}
            <div className="flex justify-center items-center relative z-0 w-full mb-5 group">
              {/* <FaUsers /> */}
              <select
                className="w-full border p-2"
                multiple
                value={users}
                onChange={handleUserSelect}
              >
                <option disabled value="Choose a category">
                  Select a User
                </option>
                {userOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                  <img src={option.img}/>
                    {option.name}
                  </option>
                ))}
              </select>

              {/* <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleSave({ userIds: ["1", "2"] })}
              >
                Add

              </button> */}

            </div>
            {/* Delete and Cancel buttons */}
            <div className="flex justify-between relative z-0 w-full mb-5 group">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete card
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
      <div className="border p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Form Preview</h3>
            <p>Title: {title}</p>
            <p>Stage: {stage}</p>
            <p>Complete: {isComplete ? "Yes" : "No"}</p>
            <p>Description: {description}</p>
            <ReactMarkdown>{description}</ReactMarkdown>
            <p>Due Date: {dueDate}</p>
            <p>Users: {users.join(", ")}</p>
          </div>
      </div>
    </div>
  );
};

export default TasksEditPage;





