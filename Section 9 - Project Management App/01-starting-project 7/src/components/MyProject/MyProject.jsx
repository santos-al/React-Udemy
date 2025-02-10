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
      <div className="project-overview">
        <div className="project-title">
          <h1>{selectedProject.title}</h1>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div className="project-description">
          <h2>Description:</h2>
          <p>{selectedProject.description}</p>
          <h2>Due Date:</h2>
          <p>{selectedProject.dueDate}</p>
        </div>
      </div>
      <div>
        <h2>Tasks</h2>
        <div>
          <input 
          className="task-input"
          required
          value={task}
          onChange={handleChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {/* Use map function to iterate through list of task */}
        <div className="task-list">
          <ul className="tasks">
            {selectedProject.tasks.map((task) => (
              <div className="single-task" key={task}>
                <li>{task}</li>
                <button className="delete-task">X</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}