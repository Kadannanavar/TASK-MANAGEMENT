import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import DeleteTaskConfirmation from "../modals/DeleteTaskConfirmation";

const Card = ({ taskObj, index, deleteTask, updateListArray, status }) => {
  const [modal, setModal] = useState({ editModal: false, deleteModal: false });

  console.log(taskObj, status);

  const colors = {
    "not-pending": {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },

    pending: {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
  };

  const toggle = () => {
    const editModalStatus = modal["editModal"];
    const deleteModalStatus = modal["deleteModal"];

    if (editModalStatus) {
      setModal({
        editModal: false,
        deleteModal: false,
      });
    } else if (deleteModalStatus) {
      setModal({
        editModal: false,
        deleteModal: false,
      });
    }
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleEditOnClick = () => {
    setModal({
      editModal: true,

      deleteModal: false,
    });
  };

  const handleDeleteOnClick = () => {
    setModal({
      editModal: false,
      deleteModal: true,
    });
  };

  let modalContent;

  if (modal["editModal"]) {
    modalContent = (
      <EditTask
        modal={modal["editModal"]}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    );
  } else if (modal["deleteModal"]) {
    modalContent = (
      <DeleteTaskConfirmation
        modal={modal["deleteModal"]}
        toggle={toggle}
        deleteTask={handleDelete}
      />
    );
  }

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[status]?.primaryColor || "blue" }}
      ></div>

      <div className="task-holder">
        <div className="h-wrapper">
          <span
            className="card-header"
            style={{
              backgroundColor: colors[status]?.secondaryColor || "blue",

              borderRadius: "10px",
            }}
          >
            {taskObj.Name}
          </span>

          <span
            className="card-header"
            style={{
              backgroundColor: colors["pending"]?.secondaryColor || "blue",
              borderRadius: "10px",
              color: "red",
            }}
          >
            {taskObj.DueDate}
          </span>
        </div>

        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{
              color: colors[status]?.primaryColor || "blue",
              cursor: "pointer",
            }}
            onClick={handleEditOnClick}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{
              color: colors[status]?.primaryColor || "blue",

              cursor: "pointer",
            }}
            onClick={handleDeleteOnClick}
          ></i>
        </div>

        {modalContent}
      </div>
    </div>
  );
};

export default Card;
