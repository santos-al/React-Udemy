import "./MyProject.css";
import { useState, useId } from "react";

export default function MyProject({ selectedProject, setProjects }) {
  const [task, setTask] = useState("");

  function handleDelete() {
    // Functionality happens inside the state to automatically update UI upon deleting the project
    setProjects(() => {
      let projects = localStorage.getItem("projects");
      projects = JSON.parse(projects);
      // Use the for loop to find which project in local storage matches up with the slected project's title
      for (let i = 0; i < projects.length; i++ ) {
        if (projects[i].title === selectedProject.title) {
          // Delete the selectedProject from the projects object
          projects.splice(i, 1);
          break;
        }
      }
      // Update local storage with the new projects object
      localStorage.setItem("projects", JSON.stringify(projects))
      return projects
    });
  }

  function handleChange(event) {
    setTask(event.target.value)
  }

  // Need the UI to update when this is called
  function handleAddTask() {
    // Add task to local storage and update UI upon creating the task
    setProjects(() => {
      let projects = localStorage.getItem("projects");
      projects = JSON.parse(projects);
      for (let i = 0; i < projects.length; i++ ) {
        if (projects[i].title === selectedProject.title) {
          if (!projects[i].tasks) {
            projects[i].tasks = []; // Initialize tasks array if it doesn't exist
          }
          projects[i].tasks.push(task);
          localStorage.setItem("projects", JSON.stringify(projects));

          // Clears the input field by emptying the task variable
          setTask("");

          return projects
        }
    }
    })
  }

  function handleDeleteTask() {
    setProjects(() => {
      
    })
  }

  return (
    <main className="task-content">
      <div>
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
        <p>{selectedProject.dueDate}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <h2>Tasks</h2>
        <div>
          <input 
          required
          value={task}
          onChange={handleChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {/* Use map function to iterate through list of task */}
        <div className="tasks-list">
          <h2>"List of all tasks"</h2> 
          <ul className="tasks">
            {selectedProject.tasks.map((task) => (
              <li className={task} key={task}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}


// 1. Add functionality to add new tasks
// 2. Add style for projects