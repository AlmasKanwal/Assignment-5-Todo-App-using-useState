'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDoApp() {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState<string[]>([]); 

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-10 text-black">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg text-white">My To-Do App</h1>

      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter your task here"
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          className="rounded-lg w-64 px-4 py-2 text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleAddTask} 
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition shadow-md active:scale-95"
        >
          Add Task
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-5 w-80">
        {tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((taskItem, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 transition"
              >
                <span>{taskItem}</span>
                <button
                  onClick={() => handleDeleteTask(index)} 
                  className="text-red-700 hover:text-red-300 transition"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No tasks yet. Add some tasks above!</p>
        )}
      </div>
    </div>
  );
}
