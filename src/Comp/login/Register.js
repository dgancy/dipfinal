import React, { useState }from 'react'
import { Button, Form } from "react-bootstrap";

export default function Register() {
    return (
        <form >
            <div class="form-group ">
                <div class="container ">
                    <h2 class="row justify-content-center ">Regisztráció</h2>
                    <br />
                    <div class="row justify-content-center text-center" >
                        <div class="col-4 " >
                            <b for="UsernameReg">UserName:</b>
                            <input type="text" class="form-control" id="UsernameReg" aria-describedby="" placeholder="Enter UserName" />
                        </div>
                    </div>
                    <br />
                    <div class="row justify-content-center text-center" >
                        <div class="col-4" >
                            <b for="PasswordInput">Password:</b>
                            <input type="password" class="form-control" id="PasswordInput" placeholder="Password" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group text-center">
                        <Button type="submit" class="btn btn-primary col-4">Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}
