import "./MyProject.css";


export default function MyProject({ selectedProject }) {
  return (
    <main className="task-content">
      <div>
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
        <p>{selectedProject.dueDate}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </main>
  );
}
