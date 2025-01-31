import "./TaskBar.css";

export default function TaskBar({ handleAddProject, handleSelectedProject, projectsList }) {
  return (
    <aside className="task-bar">
      <h2>Your Projects</h2>
      <div className="projects-list">
        {projectsList.map((project, index) => (
          <button className="project-title-button" key={index} onClick={() => handleSelectedProject(project)}>
            {project.title}
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