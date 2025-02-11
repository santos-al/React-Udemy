import "./DefaultTaskScreen.css";
import logo from "../../assets/no-projects.png";


export default function DefaultTaskScreen({ handleAddProject }) {
  return (
    <main className="no-task-content">
      <div className="image-container">
        <img src={logo} alt="Clipboard with a pen logo"></img>
      </div>
      <h2>No Project Selected</h2>
      <p>Select a project or get started wiht a new one</p>
      <button onClick={handleAddProject}>Create a new project</button>
    </main>
  )
}