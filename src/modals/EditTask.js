import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

let currentDate = new Date().toJSON().slice(0, 10);

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "dueDate") {
      console.log(dueDate, value);

      setDueDate(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setDueDate(taskObj.DueDate);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (taskName && description && dueDate) {
      let tempObj = {};

      tempObj["Name"] = taskName;
      tempObj["Description"] = description;
      tempObj["DueDate"] = dueDate;

      updateTask(tempObj);
    } else {
      alert("Task Name or  Due Date or Description field cannot be empty");
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>

      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>

          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
            required
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
            required
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
            required
          ></textarea>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
