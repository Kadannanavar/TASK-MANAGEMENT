import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

let currentDate = new Date().toJSON().slice(0, 10);
const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "dueDate") {
      setDueDate(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (taskName && description && dueDate) {
      let taskObj = {};
      taskObj["Name"] = taskName;
      taskObj["Description"] = description;
      taskObj["DueDate"] = dueDate;
      save(taskObj);
    } else {
      alert("Task Name or  Due Date or Description field cannot be empty");
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>

      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>

          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>

          <input
            type="date"
            className="form-control"
            value={dueDate}
            min={currentDate}
            onChange={handleChange}
            name="dueDate"
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
