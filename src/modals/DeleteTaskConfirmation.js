import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteTaskConfirmation = ({ modal, toggle, deleteTask }) => {
  const handleDelete = (e) => {
    e.preventDefault();

    deleteTask();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Are you Sure?</ModalHeader>

      <ModalBody>
        <p>Do you really want to delete this task?</p>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={handleDelete}>
          Confirm
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteTaskConfirmation;
