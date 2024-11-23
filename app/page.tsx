'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function ToDoApp() {
  
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState<string[]>([]); 
  const [editIndex, setEditIndex] = useState<number | null>(null); 

  const handleAddOrEditTask = () => {
    if (task.trim()) {
      if (editIndex !== null) {
      
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null); 
      } else {
        
        setTasks([...tasks, task]);
      }
      setTask(''); 
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
  };

  const handleEditTask = (index: number) => {
    setTask(tasks[index]); 
    setEditIndex(index); 
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col items-center py-10 px-4 sm:px-0 text-white">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 drop-shadow-lg text-center">
        My To-Do App
      </h1>

      <div className="flex flex-wrap gap-3 mb-8 justify-center w-full">
        <input
          type="text"
          placeholder={editIndex !== null ? "Edit your task..." : "Enter your task..."}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 rounded-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleAddOrEditTask}
          className="px-5 py-2 w-full sm:w-auto rounded-lg bg-green-800 text-white shadow-md hover:bg-green-700 transition active:scale-95"
        >
          {editIndex !== null ? "Edit Task" : "Add Task"}
        </button>
      </div>

      <div className="bg-white w-full sm:w-96 p-4 sm:p-5 rounded-lg shadow-lg">
        {tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((taskItem, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-2 rounded-md shadow-sm bg-black text-white hover:bg-gray-700 transition"
              >
                <span className="text-sm sm:text-base break-words">{taskItem}</span>
                <div className="flex gap-2">
                  
                  <button
                    onClick={() => handleEditTask(index)}
                    className="text-blue-500 hover:text-blue-300 transition"
                    title="Edit Task"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="text-red-500 hover:text-red-300 transition"
                    title="Delete Task"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No tasks yet. Add some tasks above!
          </p>
        )}
      </div>
    </div>
  );
}
