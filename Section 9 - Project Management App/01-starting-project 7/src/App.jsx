import MyProject from "./components/MyProject/MyProject";
import DefaultTaskScreen from "./components/DefaultTaskScreen/DefaultTaskScreen";
import CreatingProject from "./components/CreatingProject/CreatingProject";
import TaskBar from "./components/TaskBar/TaskBar";

import { useState } from "react";

// change data into local storage

function App() {
  const [displayMainContent, setDisplayMainContent] = useState(<DefaultTaskScreen handleAddProject={handleAddProject}/>);
  const [projects, setProjects] = useState(() => {
    // Load projects from Local Storage or use the default projectsList
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : "";
  });

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  // const isProjectListEmpty = isEmpty(projectsList);

  function handleAddProject() {
    setDisplayMainContent(<CreatingProject handleCancel={handleCancelProject} addProject={addProject} />);
  }

  function handleSelectedProject(projectTitle) {
    setDisplayMainContent(<MyProject selectedProject={projectTitle} />)
  }

  function handleCancelProject() {
    setDisplayMainContent(<DefaultTaskScreen handleAddProject={handleAddProject} />);
  }

  function addProject(newProject) {
    const newKey = `project${Object.keys(projects).length + 1}`;
    const updatedProjects = {
      ...projects,
      [newKey]: newProject,
    };
    setProjects(updatedProjects);
  }



  return (
    <>
      <section className="grid grid-cols-[30%,70%]">
        <TaskBar handleSelectedProject={handleSelectedProject} handleAddProject={handleAddProject} projectsList={projects} />
        {displayMainContent}
      </section>
    </>
  );
}

export default App;
