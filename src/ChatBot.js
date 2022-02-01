import React from "react";
import { Modal } from "react-bootstrap";
import "./ChatBot.css";
const ChatBot = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} dialogClassName="chatBot">
        <Modal.Header closeButton onHide={() => setShow(false)}>
          <Modal.Title>
            <h3 className="primaryColor fw-bold"> Traveller</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="Traveller"
            src="https://webchat.botframework.com/embed/nstunow?s=1yKYFyasbfM.yXJpJ2i7Nmv3DDHxHqg1r7-Dwjxe1EjdIeX_sI9ZJlY"
            style={{ minWidth: " 100px", width: "100%", minHeight: "300px" }}
          ></iframe>
          <p
            className="text-center text-secondary "
            style={{ fontSize: "14px" }}
          >
            Developed by Imtiaz Mahmod
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChatBot;
