import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  if (userIsRegistered) {
    return (
      <div className="container">
        <Form btntext="login" />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Form btntext="register" />
      </div>
    );
  }
}

export default App;
