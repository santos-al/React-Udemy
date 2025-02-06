import MyProject from "./components/MyProject/MyProject";
import DefaultTaskScreen from "./components/DefaultTaskScreen/DefaultTaskScreen";
import CreatingProject from "./components/CreatingProject/CreatingProject";
import TaskBar from "./components/TaskBar/TaskBar";

import { useEffect, useState } from "react";

function App() {
  const [displayMainContent, setDisplayMainContent] = useState(<DefaultTaskScreen handleAddProject={handleAddProject}/>);
  const [projects, setProjects] = useState([])

  function handleAddProject() {
    setDisplayMainContent(<CreatingProject handleCancel={handleCancelProject} addProject={addProject} />);
  }

  function handleSelectedProject(projectTitle) {
    setDisplayMainContent(<MyProject selectedProject={projectTitle} />)
  }

  function handleCancelProject() {
    setDisplayMainContent(<DefaultTaskScreen handleAddProject={handleAddProject} />);
  }

  // Load projects from local storage
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects)); // Parse and set the projects
    } else {
      localStorage.setItem("projects", JSON.stringify([])); // Initialize with an empty array
    }
  }, []);

  function addProject(newProject) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects, newProject]; // Append the new project to the previous state
      localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Save the updated projects list to localStorage
      return updatedProjects; // Return the updated state
    });
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
