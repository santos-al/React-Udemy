import projectsList from "./content/projects";
import Project from "./components/MyProject/MyProject";
import DefaultTaskScreen from "./components/DefaultTaskScreen/DefaultTaskScreen";
import CreatingProject from "./components/CreatingProject/CreatingProject";
import TaskBar from "./components/TaskBar/TaskBar";

function App() {
  // The main section will either
  //  1. Display "Create a new project, if 'projectsList' is empty"
  //  2. Or display the selected project and its contents

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const isProjectListEmpty = isEmpty(projectsList);

  let displayMainContent = <DefaultTaskScreen />;
  let creatingProject = true;

  if (creatingProject) {
    displayMainContent = <CreatingProject creatingProject={creatingProject} />;
  } else {
    displayMainContent = isProjectListEmpty ? (
      <DefaultTaskScreen />
    ) : (
      <Project />
    );
  }

  return (
    <>
      <section className="grid grid-cols-[30%,70%]">
        <TaskBar />
        {displayMainContent}
      </section>
    </>
  );
}

export default App;
