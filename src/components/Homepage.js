import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Login from "./Login";

function Homepage() {
  const [show, setShow] = useState(0);

  if (show === 1) {
    return <Login />;
  }

  return (
    <div className="container border border-primary">
      <div className="d-flex justify-content-end">
        <Button
          name="login"
          onClick={() => setShow(1)}
          className="btn-primary btn-lg mx-5"
        >
          Login
        </Button>
        <Button name="signup" className="btn-primary btn-lg">
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
