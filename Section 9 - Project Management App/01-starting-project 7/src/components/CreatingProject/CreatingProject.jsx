import "./CreatingProject.css";
import { useState } from "react";

export default function CreatingProject({ handleCancel }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value}))
  }

  const handleSubmit = (event => {
    event.preventDefault();

    // set the creatingProject to false and link it to the variable from the app
    // Probbaly can useRef to connect them and then useState to cause the page to refrsh

    // Add the data to content
    console.log(formData);

  })


  return (
    <form onSubmit={handleSubmit} className="creating-project">
      <div className="form-buttons">
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="save-button" type="submit">Save</button>
      </div>
      <div className="input-section">
        <div className="input">
          <label htmlFor="title">Title</label>
          <input 
            required 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="description">Description</label>
          <textarea 
            type="text"
            name="description" 
            value={formData.description}
            onChange={handleChange}

            />
        </div>
        <div className="input">
          <label htmlFor="dueDate">Due Date</label>
          <input 
            type="date" 
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};