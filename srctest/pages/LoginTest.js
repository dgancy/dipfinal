import React, { useSyncExternalStore } from 'react'
import {useState} from "react"

export default function LoginTest() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name= event.target.name;
        const value= event.target.value;
        setInputs(values=> ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
    }
  return (
      <div>
        <h1>LoginTest</h1>
        <form onSubmit={handleSubmit}>
            <table >
                <tbody>
                    <tr>
                        <th>
                            <a>Name: </a>
                        </th>

                        <td>
                            <input type="text" name="name" onChange={handleChange}/>
                        </td>

                    </tr>
                    
                    <tr>

                        <th>
                            <a>Password: </a>
                        </th>
                        <td>
                            <input type="text" name="password" onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </form>
      </div>
      )
}
