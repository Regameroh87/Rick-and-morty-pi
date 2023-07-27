import styled from "./Form.module.css";
import { useState } from "react";
import validate from "./validate";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={styled.divForm}>
      <form className={styled.form} onSubmit={handleSubmit}>
        <div className={styled.divInput}>
          <label className={styled.label} htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div className={styled.divInput}>
          <label className={styled.label} htmlFor="password">
            Password:
          </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  );
}
