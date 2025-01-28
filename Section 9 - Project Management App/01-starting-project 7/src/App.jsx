import projectsList from "../content/taskContent";
import Project from "./components/Project";
import DefaultTaskScreen from "./components/defaultTaskScreen";

function App() {

  // The main section will either
  //  1. Display "Create a new project, if 'projectsList' is empty"
  //  2. Or display the selected project and its contents

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const isProjectListEmpty = isEmpty(projectsList)


  return (
    <>
      <section className="grid grid-cols-[30%,70%]">
        <aside className="task-bar">
          <h1>Your Projects</h1>
        </aside>
        {isProjectListEmpty ? <DefaultTaskScreen /> : <Project />}
      </section>
    </>
  );
}

export default App;
