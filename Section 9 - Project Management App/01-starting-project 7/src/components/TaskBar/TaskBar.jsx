import projectsList from "../../content/projects";
import "./TaskBar.css";

export default function TaskBar({ handleAddProject, handleSelectedProject }) {
  return (
    <aside className="task-bar">
      <h2>Your Projects</h2>
      <div className="projects-list">
        {Object.keys(projectsList).map((key) => (
          <button className="project-title-button" key={key} onClick={() => handleSelectedProject(projectsList[key])}>
            {projectsList[key].title}
          </button>
        ))}
      </div>
      {/* Call the handleAddProject function when the button is clicked */}
      <button className="add-project" onClick={handleAddProject}>
        + Add Project
      </button>
    </aside>
  );
}