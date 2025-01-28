import projectsList from "../../content/projects";
import "./TaskBar.css";

export default function TaskBar() {
  return (
    <aside className="task-bar">
      <h2>Your Projects</h2>
      <div className="projects-list">
        {Object.keys(projectsList).map((key) => (
          <button className="project-title-button" key={key}>
            {projectsList[key].title}
          </button>
        ))}
      </div>
      <button className="add-project">+ Add Project</button>
    </aside>
  );
}
