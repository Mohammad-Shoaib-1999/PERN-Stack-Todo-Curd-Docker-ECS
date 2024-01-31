import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TasksListPage = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', stage: 'TODO' },
    { id: 2, title: 'Task 2', stage: 'TODO' },
    { id: 3, title: 'Task 3', stage: 'IN PROGRESS' },
    { id: 4, title: 'Task 4', stage: 'DONE' },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, stage) => {
    const taskId = e.dataTransfer.getData('text/plain');
    const updatedTasks = tasks.map((task) =>
      task.id === parseInt(taskId) ? { ...task, stage } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddCard = (stage) => {
    // You can navigate to the new task creation page with the appropriate stage
    navigate(`/tasks/new?stage=${stage}`);
  };
  return (
    <div className="flex space-x-4">
      {['TODO', 'IN PROGRESS', 'DONE'].map((stage) => (
        <div
          key={stage}
          className="flex-1 border p-4 rounded bg-gray-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, stage)}
        >
          <h2 className="text-xl font-semibold mb-4">{stage}</h2>
          <div className="min-h-40">
            {tasks
              .filter((task) => task.stage === stage)
              .map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  className="p-2 mb-2 bg-white border rounded shadow cursor-pointer"
                >
                  {task.title}
                </div>
              ))}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => handleAddCard(stage)}
          >
            Add Card
          </button>
        </div>
      ))}
    </div>
  )
}

export default TasksListPage


