import React from "react";
import axios from "axios";
import { DOCTOR_ROLE } from "../../Authentication/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4000";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement authentication API call here
    axios
      .post(`${API_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        let url =
          response.data.access_token === DOCTOR_ROLE ? "/doctor" : "/user";
          navigate(url, {state: response.data.access_token})
      });
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
