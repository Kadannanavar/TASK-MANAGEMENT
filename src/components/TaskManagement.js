import React, { useEffect, useState } from "react";
import CreateTask from "../modals/createTask";
import Card from "./Card";

const compareDates = (dueDate) => {
  let currentDate = new Date().toJSON().slice(0, 10);
  let cdate = new Date(currentDate).getTime();
  let date = new Date(dueDate).getTime();

  if (cdate > date) {
    return "pending";
  } else {
    return "not-pending";
  }
};

const TaskManagement = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>TaskManagement</h3>

        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>

      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={index}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              status={compareDates(obj.DueDate)}
            />
          ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TaskManagement;
