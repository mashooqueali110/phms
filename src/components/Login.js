import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Homepage from "./Homepage";

function Login() {
  // const [show, setShow] = useState(true);
  const [goHomePage, setHomePage] = useState(0);

  if (goHomePage === 1) {
    return <Homepage />;
  }

  return (
    <div>
      <Modal show={true} onHide={() => setHomePage(1)}>
        <Modal.Header closeButton>
          <Modal.Title>Login as</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex justify-content-center mb-3">
              <Button
                name="doctor"
                className="btn btn-Primary btn-lg "
                style={{ width: 170 }}
              >
                Doctor
              </Button>
            </div>

            <div className="d-flex justify-content-center mb-3">
              <Button
                name="doctor"
                className="btn btn-success btn-lg "
                style={{ width: 170 }}
              >
                Medical Staff
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button
                name="doctor"
                className="btn btn-danger btn-lg "
                style={{ width: 170 }}
              >
                Patient Relative
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setHomePage(1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
