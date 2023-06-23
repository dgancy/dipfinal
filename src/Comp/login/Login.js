import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
     setTimeout(function () {
       navigate("/dip");
     }, 4000);
  };

  const send = () => {
    const result = fetch (`http://localhost:80/login/name/${username}/password/${password}`,{
        method: "GET",
        // mode: "cors",
        headers: {
          'Content-Type': 'text/plain'
        }
      }
    )
    result.then((value) => {
      value.json().then((res) => {
        console.log(res)
      })
    })
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div class="form-group ">
        <div class="container ">
          <h2 class="row justify-content-center ">Login</h2>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b for="exampleInputEmail1">Email:</b>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                name="username"
                value={username}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b for="exampleInputPassword1">Password:</b>
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
