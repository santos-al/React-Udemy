import projectsList from "./content/projects";
import Project from "./components/Project";
import DefaultTaskScreen from "./components/defaultTaskScreen";
import CreatingProject from "./components/CreatingProject";
import TaskBar from "./components/TaskBar";

function App() {
  // The main section will either
  //  1. Display "Create a new project, if 'projectsList' is empty"
  //  2. Or display the selected project and its contents

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const isProjectListEmpty = isEmpty(projectsList);

  let displayMainContent = <DefaultTaskScreen />;
  let creatingProject = false;

  if (creatingProject) {
    displayMainContent = <CreatingProject />;
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
