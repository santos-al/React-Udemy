import "./MyProject.css";


export default function MyProject({ selectedProject, setProjects }) {

  function handleDelete() {
    setProjects(() => {
      let projects = localStorage.getItem("projects");
      projects = JSON.parse(projects);
      for (let i = 0; i < projects.length; i++ ) {
        if (projects[i].title === selectedProject.title) {
          projects.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("projects", JSON.stringify(projects))
      return projects
    });
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
          <input></input>
          <button>Add Task</button>
        </div>
        <p>"List of all tasks"</p>
      </div>
    </main>
  );
}


// 1. Add functionality to add new tasks
// 2. Add style for projects