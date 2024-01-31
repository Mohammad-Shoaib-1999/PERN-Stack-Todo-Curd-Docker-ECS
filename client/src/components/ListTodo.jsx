// import { useState, useEffect } from "react";
// import axios from "axios";
// import EditTodo from "./EditTodo";

// const ListTodo = () => {
//   const [todos, setTodos] = useState([]);

//   const getTodos = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/task");
//       setTodos(response.data);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/task/${id}`);
//       setTodos(todos.filter((todo) => todo.id !== id));
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };
// console.log(todos)
//   return (
//     <section className="flex items-center justify-center w-full h-auto">
//       <table className="w-3/5 mt-5">
//         <thead className="text-left">
//           <tr className=" border-y-2 border-y-gray-300 bg-gray-50 p-4">
//             <th className="p-4">Description</th>
//             <th className="p-4">Edit</th>
//             <th className="p-4">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id} className="p-4">
//               <td className="p-4">{todo.discreption}</td>
//               <td className="p-4">
//                 <EditTodo todo={todo}/>
//               </td>
//               <td className="p-4">
//                 <button
//                   className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
//                   onClick={() => deleteTodo(todo.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default ListTodo;
