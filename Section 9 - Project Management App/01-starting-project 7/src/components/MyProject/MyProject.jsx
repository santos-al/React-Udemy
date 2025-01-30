import "./MyProject.css";


export default function MyProject({ selectedProject }) {
  return (
    <main className="task-content">
      <div>
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
        <p>{selectedProject.dueDate}</p>
        <button>Delete</button>
      </div>
      <div>
        <h2>Tasks</h2>
        <div>
          <input></input>
          <button>Add Task</button>
        </div>
        <p>"List of all tasks"</p>
      </div>
    </main>
  );
}
