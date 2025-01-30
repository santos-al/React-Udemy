import projectsList from "./content/projects";
import MyProject from "./components/MyProject/MyProject";
import DefaultTaskScreen from "./components/DefaultTaskScreen/DefaultTaskScreen";
import CreatingProject from "./components/CreatingProject/CreatingProject";
import TaskBar from "./components/TaskBar/TaskBar";

import { useState } from "react";

function App() {
  const [displayMainContent, setDisplayMainContent] = useState(<DefaultTaskScreen handleAddProject={handleAddProject}/>);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const isProjectListEmpty = isEmpty(projectsList);

  function handleAddProject() {
    setDisplayMainContent(<CreatingProject handleCancel={handleCancelProject} />);
  }

  function handleSelectedProject(projectTitle) {
    setDisplayMainContent(<MyProject selectedProject={projectTitle} />)
  }

  function handleCancelProject() {
    setDisplayMainContent(<DefaultTaskScreen handleAddProject={handleAddProject} />);
  }

  return (
    <>
      <section className="grid grid-cols-[30%,70%]">
        <TaskBar handleSelectedProject={handleSelectedProject} handleAddProject={handleAddProject} />
        {displayMainContent}
      </section>
    </>
  );
}

export default App;
