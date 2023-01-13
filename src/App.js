//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
   Name: "",
   Phonenumber: "",
    gmail: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setVaild] = useState(false);
  const handleFirstInputChange = (event) => {
    setValues({ ...values, Name: event.target.value });
  };
  const handlenumberputChange = (event) => {
    setValues({ ...values, Phonenumber: event.target.value });
  };
  const handleGmailInputChange = (event) => {
    setValues({ ...values, gmail: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.Name && values.Phonenumber && values.gmail) {
      setVaild(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success! Thank you Register</div>
        ) : null}
       
        <input
          disabled={submitted}
          onChange={handleFirstInputChange}
          value={values.Name}
          id="name"
          class="form-field"
          type="text"
          placeholder=" Name"
          name="Name"
        />
        {submitted && !values.Name ? (
          <span>Please enter a  name</span>
        ) : null}
        <input
          disabled={submitted}
          onChange={handlenumberputChange}
          value={values.Phonenumber}
          id="Phonenumber"
          class="form-field"
          type="text"
          placeholder="Phonenumber "
          name="Phonenumber"
        />
        {submitted && !values.Phonenumber ? (
          <span>Please enter a Phonenumber</span>
        ) : null}
        <input
          disabled={submitted}
          onChange={handleGmailInputChange}
          value={values.gmail}
          id="email"
          class="form-field"
          type="text"
          placeholder="gmail"
          name="gmail"
        />
        {submitted && !values.gmail ? <span>Please enter a gmail </span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
