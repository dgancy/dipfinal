import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    passwordonemore: "",
  });

  const { username, password, email, passwordonemore } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setTimeout(function () {
      navigate("/log");
    }, 4000);
  };

  const send = () => {
    const result = fetch(
      `http://localhost:80/login/name/${username}/password/${password}`,
      {
        method: "GET",
        // mode: "cors",
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    result.then((value) => {
      value.json().then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="form-group ">
        <div class="container ">
          <h2 class="row justify-content-center ">Regisztráció</h2>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b for="UsernameReg">Email:</b>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b for="UsernameReg">UserName:</b>
              <input
                type="text"
                class="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b for="PasswordInput">Password:</b>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                value={password}
                name="password"
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b for="PasswordInput">Password:</b>
              <input
                type="password"
                class="form-control"
                placeholder="Password Again"
                value={passwordonemore}
                name="passwordonemore"
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div class="form-group text-center">
            <Button
              type="submit"
              name="submit"
              class="btn btn-primary col-4"
              onClick={send}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
