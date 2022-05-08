import { useState } from "react";

function Form(props) {
  const [taskName, setTaskName] = useState("");

  function captureChange(e) {
    setTaskName(e.target.value); // updates state
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents form from submitting
    props.createTask(taskName); // send back entered name to app component
    setTaskName(""); // once entered name sent to app , reset the state value to empty string
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Enter Event Name
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={taskName}
        onChange={captureChange}
        required
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
